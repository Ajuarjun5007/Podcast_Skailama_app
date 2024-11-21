import React, { useState } from "react";
import "../../Styles/HomePage.css"; 
import logo from "../../Assets/QuesLogo 1.png";
import podcast_img from "../../Assets/podcast_img.jpg";
import { FaBell } from "react-icons/fa"; 
import { MdSettings } from "react-icons/md";
import { FiPlusCircle } from "react-icons/fi";
import ProjectModal from "../../Components/ProjectModal"; 

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => {
    setIsModalOpen(true); 
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const handleCreateProject = () => {
    
    console.log("Project Created!");
    setIsModalOpen(false); 
  };

  return (
    <div className="page-container">
      <div className="header-container">
        <header className="header" style={{ width: "90%" }}>
          <img src={logo} alt="Logo" />
          <div className="header-icons">
            <MdSettings className="icon" /> 
            <FaBell className="icon" /> 
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
        <div className="create-button-container">
        <FiPlusCircle className="plus-icon" /> 
        <button className="create-button" onClick={handleOpenModal}>
          Create New Project
        </button>
        </div >
      </main>

      {/* Include the ProjectModal component */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleCreateProject}
        title="Create Project"
        placeholder="Enter Project Name"
      />
    </div>
  );
};

export default HomePage;
