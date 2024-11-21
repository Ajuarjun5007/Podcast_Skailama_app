import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import CreateUserComponent from "./CreateUserComponent";
import "./UserModalComponent.css"; // Add some styles for the modal

const UserModalComponent = ({ show, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!show) return null; // Do not render if modal is closed

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          X
        </button>
        {isLogin ? (
          <>
            <LoginComponent />
            <p>
              Don't have an account?{" "}
              <button
                className="toggle-button"
                onClick={() => setIsLogin(false)}
              >
                Create User
              </button>
            </p>
          </>
        ) : (
          <>
            <CreateUserComponent />
            <p>
              Already have an account?{" "}
              <button
                className="toggle-button"
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserModalComponent;
