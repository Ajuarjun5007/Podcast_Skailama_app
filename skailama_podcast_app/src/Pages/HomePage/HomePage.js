import React from "react";
import "./HomePage.css"; // CSS file for styles
import logo from "../../Assets/QuesLogo 1.png";
import podcast_img from "../../Assets/podcast_img.jpg";
import { FaBell } from "react-icons/fa"; // Import Bell Icon

import { IoSettingsOutline } from "react-icons/io5";
import { MdSettings } from "react-icons/md";
const HomePage = () => {
  return (
    <div className="page-container">
      <div className="header-container">
        <header className="header" style={{ width: "90%" }}>
          <img src={logo} alt="Logo" />
          <div className="header-icons">
            <MdSettings className="icon" /> {/* Settings Icon */}
            <FaBell className="icon" /> {/* Bell Icon */}
          </div>
        </header>
      </div>
      <main className="content">
        <h2 className="title">Create a New Project</h2>
        <div className="image-container">
          <img
            src={podcast_img}
            alt="Create a Project"
            className="illustration"
          />
        </div>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in.
        </p>
        <button className="create-button">+ Create New Project</button>
      </main>
    </div>
  );
};

export default HomePage;
