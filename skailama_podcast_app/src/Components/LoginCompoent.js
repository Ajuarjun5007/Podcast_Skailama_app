import React from "react";

const LoginComponent = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" placeholder="Enter your password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginComponent;
