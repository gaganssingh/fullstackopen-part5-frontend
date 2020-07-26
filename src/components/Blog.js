import React, { useState } from "react";

import "./Blog.css";

const Blog = ({ blog }) => {
   const [showDetails, setShowDetails] = useState(false);

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
            <button>like</button>
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
