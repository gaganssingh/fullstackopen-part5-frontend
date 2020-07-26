import React, { useState } from "react";

const LoginForm = ({ handleLogin }) => {
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");

   const handleFormSubmit = (e) => {
      e.preventDefault();
      handleLogin({
         username,
         password,
      });
      setUsername("");
      setPassword("");
   };

   return (
      <form onSubmit={handleFormSubmit}>
         <label htmlFor="username">username</label>
         <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={({ target }) => setUsername(target.value)}
         />
         <label htmlFor="password">password</label>
         <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={({ target }) => setPassword(target.value)}
         />
         <button>login</button>
      </form>
   );
};

export default LoginForm;
