import React from "react";

const NewBlog = (props) => {
   const {
      addBlog,
      newTitle,
      setNewTitle,
      newAuthor,
      setNewAuthor,
      newUrl,
      setNewUrl,
      setShowBlogForm,
   } = props;

   return (
      <>
         <form onSubmit={addBlog}>
            <h2>Create new blog</h2>
            title:
            <input
               type="text"
               value={newTitle}
               onChange={({ target }) => setNewTitle(target.value)}
            />
            <div>
               author:
               <input
                  type="text"
                  value={newAuthor}
                  onChange={({ target }) => setNewAuthor(target.value)}
               />
            </div>
            <div>
               url:
               <input
                  type="text"
                  value={newUrl}
                  onChange={({ target }) => setNewUrl(target.value)}
               />
            </div>
            <button>Create</button>
         </form>
         <button onClick={() => setShowBlogForm(false)}>Cancel</button>
      </>
   );
};

export default NewBlog;
