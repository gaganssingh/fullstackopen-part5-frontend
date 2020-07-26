import React, { useState } from "react";

import NewBlog from "./NewBlog";
import Blog from "./Blog";

const DisplayBlog = ({ createBlog, blogs, handleLikeDislike }) => {
   const [showBlogForm, setShowBlogForm] = useState(false);

   return (
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
            <Blog
               key={blog.id}
               blog={blog}
               handleLikeDislike={handleLikeDislike}
            />
         ))}
      </div>
   );
};

export default DisplayBlog;
