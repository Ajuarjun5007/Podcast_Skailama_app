import React from "react";
import "../Styles/ProjectModal.css"; // Import CSS for styling

const ProjectModal = ({ isOpen, onClose, onSubmit, title, placeholder }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{title}</h2>
        <input type="text" placeholder={placeholder} className="modal-input" />
        <p className="error-message">Project Name Can't be empty</p>
        <div className="modal-actions">
          <button className="cancel-button-modal" onClick={onClose}>
            Cancel
          </button>
          <button className="create-button-modal" onClick={onSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
