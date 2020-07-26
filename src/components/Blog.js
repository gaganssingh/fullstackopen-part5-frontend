import React, { useState } from "react";

import "./Blog.css";

const Blog = ({ blog, handleLikeDislike }) => {
   const [showDetails, setShowDetails] = useState(false);

   const likeBlog = async () => {
      const changedBlog = {
         ...blog,
         likes: blog.likes + 1,
      };
      handleLikeDislike(blog.id, changedBlog, "liked");
   };

   const dislikeBlog = async () => {
      const changedBlog = {
         ...blog,
         likes: blog.likes - 1,
      };
      handleLikeDislike(blog.id, changedBlog, "disliked");
   };

   const compactDisplay = (
      <>
         {blog.title} - {blog.author}
      </>
   );

   const detailedDisplay = (
      <>
         <p>Title: {blog.title}</p>
         <p>Url: {blog.url}</p>
         <p>
            Likes: {blog.likes}
            <button onClick={likeBlog}>like</button>
            <button onClick={dislikeBlog}>dislike</button>
         </p>
         <p>Author: {blog.author}</p>
      </>
   );

   return (
      <div className="Blog">
         {!showDetails ? compactDisplay : detailedDisplay}
         <button onClick={() => setShowDetails(!showDetails)}>
            {showDetails ? "Hide" : "Show"}
         </button>
      </div>
   );
};

export default Blog;
