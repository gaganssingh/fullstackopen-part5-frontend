import React, { useState, useEffect } from "react";
import Blog from "./components/Blog";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Notification from "./components/Notification";
import NewBlog from "./components/NewBlog";
import LoginForm from "./components/LoginForm";

const App = () => {
   const [blogs, setBlogs] = useState([]);

   const [user, setUser] = useState(null);

   const [notification, setNotification] = useState("");
   const [notificationStyle, setNotificationStyle] = useState("");
   const [showBlogForm, setShowBlogForm] = useState(false);

   //  Initial loading of all blogs when app first loads
   useEffect(() => {
      blogService.getAll().then((blogs) => setBlogs(blogs));
   }, []);

   //  Check if user already logged in on first app load
   useEffect(() => {
      const loggedUserJSON = window.localStorage.getItem("loggedInBlogAppUser");
      if (loggedUserJSON) {
         const user = JSON.parse(loggedUserJSON);
         setUser(user);
      }
   }, []);

   //  Handles the logic for user login
   const handleLogin = async (loginObject) => {
      try {
         const user = await loginService.login(loginObject);

         window.localStorage.setItem(
            "loggedInBlogAppUser",
            JSON.stringify(user)
         );
         blogService.setToken(user.token);
         setUser(user);
         //  setUsername("");
         //  setPassword("");
         setNotification("Successfully logged in");
         setNotificationStyle("success");
      } catch (exception) {
         setNotification("Invalid login credentials");
         setNotificationStyle("error");
      }

      setTimeout(() => {
         setNotification("");
         setNotificationStyle("");
      }, 3000);
   };

   //  Handles the logic for user logout
   const handleLogout = () => {
      window.localStorage.removeItem("loggedInBlogAppUser");
      setUser(null);
      setNotification("Successfully logged out");
      setNotificationStyle("success");

      setTimeout(() => {
         setNotification("");
         setNotificationStyle("");
      }, 3000);
   };

   //  Handles the logic for creating a new blog
   const createBlog = async (newBlogObject) => {
      blogService.setToken(user.token);

      try {
         const blogObject = await blogService.create(newBlogObject);
         setBlogs(blogs.concat(blogObject));
         setNotification(
            `A new blog titled "${blogObject.title}" by ${blogObject.author} added.`
         );
         setNotificationStyle("success");
      } catch (error) {
         setNotification(`Something went wrong. Please try again later.`);
         setNotificationStyle("error");
      }

      setTimeout(() => {
         setNotification("");
         setNotificationStyle("");
      }, 3000);
   };

   const displayBlog = () => (
      <div>
         <h2>blogs</h2>
         <button onClick={() => setShowBlogForm(true)}>Create Blog</button>
         {showBlogForm && (
            <NewBlog
               createBlog={createBlog}
               setShowBlogForm={setShowBlogForm}
            />
         )}
         <br />
         {blogs.map((blog) => (
            <Blog key={blog.id} blog={blog} />
         ))}
      </div>
   );

   return (
      <div>
         <h2>{!user ? "Please login" : "Blogs"}</h2>
         {notification && (
            <Notification text={notification} style={notificationStyle} />
         )}
         {user && <p>{user.name} is currently logged in</p>}
         {user && <button onClick={handleLogout}>logout</button>}
         {!user ? <LoginForm handleLogin={handleLogin} /> : displayBlog()}
      </div>
   );

   //  return ;
};

export default App;
