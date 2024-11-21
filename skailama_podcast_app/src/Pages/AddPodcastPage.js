import React from "react";
import "../Styles/AddPodcastPage.css"; // Import the CSS file
import logo from "../Assets/QuesLogo 1.png";
import rss_logo from "../Assets/rss-logo.png";
import yt_logo from "../Assets/yt-logo.png";
import arrow_logo from "../Assets/ic_round-upload.png";
import cloud_logo from "../Assets/cloud_upload.png";
import { IoExitOutline } from "react-icons/io5";
import { AiOutlineBell } from "react-icons/ai";
const AddPodcastPage = () => {
  return (
    <div className="add-podcast-page">
      {/* Sidebar */}
      <aside className="add-podcast-sidebar">
          <div className="add-podcast-sidebar-item-img-container">  
            <img className="add-podcast-sidebar-item-img" src={logo} alt="Logo" /></div>
        <ul className="add-podcast-sidebar-menu">
          <li className="add-podcast-sidebar-item active">+ Add your Podcast(s)</li>
          <li className="add-podcast-sidebar-item">Create & Repurpose</li>
          <li className="add-podcast-sidebar-item">Podcast Widget</li>
          <li className="add-podcast-sidebar-item">Upgrade</li>
        </ul>
        <div className="add-podcast-sidebar-footer">
          <span>Help</span>
          <div className="add-podcast-user-info">
            {/* <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="add-podcast-user-avatar"
            /> */}
            <span className="add-podcast-user-name">Username</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="add-podcast-main-content">
        {/* Header Section */}
        <header className="add-podcast-header">
          {/* <h1 className="add-podcast-header-title">Ques.AI</h1> */}
          <span style={{color:'#999999',fontWeight:700,fontSize:'25px'}}>Home Page / Sample Project / <span style={{color:'#7E22CE',fontWeight:700,fontSize:'25px'}}>Add Your Podcast</span> </span>
          <div className="add-podcast-header-icons">
          <div className="add-podcast-icon-container">
          <AiOutlineBell style={{color:'black',fontSize:'20px'}}/>
            </div>
            <div className="add-podcast-icon-container">
          <IoExitOutline style={{color:'#FF274C',fontSize:'20px'}}/>
            </div>
         
            {/* <button className="add-podcast-icon-button">🔍</button>
            <button className="add-podcast-icon-button">🔔</button> */}
          </div>
        </header>
        {/* Main Section */}
        <main className="add-podcast-content">
            <div className="add-podcast-title-container">
          <h2 className="add-podcast-title">Add Podcast</h2>
            </div>

          {/* Card Options */}
          <div className="add-podcast-cards">
            {/* card1 */}
            <div className="add-podcast-card-container">
                <div className="add-podcast-card">
              <h3>RSS Feed</h3>
              <p>Lorem ipsum dolor sit.</p>
              <p>Dolor lorem sit.</p>
                </div>
                <img src={rss_logo}/>
            </div>
            {/* card2 */}

            <div className="add-podcast-card-container">
                <div className="add-podcast-card">
              <h3>Youtube</h3>
              <p>Lorem ipsum dolor sit.</p>
              <p>Dolor lorem sit.</p>
                </div>
                <img src={yt_logo}/>
            </div>
            {/* card3 */}

            <div className="add-podcast-card-container">
                <div className="add-podcast-card">
              <h3>Upload Files</h3>
              <p>Lorem ipsum dolor sit.</p>
              <p>Dolor lorem sit.</p>
                </div>
                <div style={{backgroundColor:'#F3E8FF', borderRadius:'20px'}}>
                <img style={{height:'80px'}} src={arrow_logo}/>
                </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="add-podcast-upload">
            <div className="add-podcast-upload-icon">
                <img src={cloud_logo}/>
            </div>
            <p className="add-podcast-upload-text">
              Select a file or drag and drop here (Podcast Media or Transcription Text)
              <br />
              <small>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file</small>
            </p>
            <button className="add-podcast-upload-button">Select File</button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AddPodcastPage;
