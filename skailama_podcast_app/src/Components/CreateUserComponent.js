import React from "react";

const CreateUserComponent = () => {
  return (
    <div>
      <h2>Create User</h2>
      <form>
        <label>
          Name:
          <input type="text" placeholder="Enter your name" required />
        </label>
        <br />
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
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateUserComponent;
