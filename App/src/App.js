// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing'; // Ensure proper casing in import paths
import Signup from './pages/signup';
import HomePage from './pages/homepage';
import ResourceMap from './pages/resourcemap';
import OffersPage from './pages/offerpage'; // Import the OffersPage component
import SidebarLayout from './pages/sidebarlayout'; // Adjust path if necessary
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/map" element={<SidebarLayout><ResourceMap /></SidebarLayout>} />
        <Route path="/offers" element={<SidebarLayout><OffersPage /></SidebarLayout>} /> {/* Add this line */}
        {/* Additional routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
