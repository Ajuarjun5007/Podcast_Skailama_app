import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AddPodcastPage from './Pages/AddPodcastPage';
import { Routes, Route } from 'react-router-dom'; // Do not import BrowserRouter here

function App() {
  return (
    <div className="App">
      {/* Only include Routes and Route here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/AddPodcast" element={<AddPodcastPage />} />
      </Routes>
    </div>
  );
}

export default App;
