import React from 'react';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'; // Do not import BrowserRouter here

function App() {
  return (
    <div className="App">
      {/* Only include Routes and Route here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
