// src/pages/HomePage.js
import React, { useState } from 'react';
import Sidebar from './sidebarmain';
import Feed from './feedmain';
import mockUpdates from '../data/mockData';
import mockRequests from '../data/mockRequests';
import '../styles/homepage.css';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('feed'); // Default to 'feed'

  const handleMenuItemClick = (view) => {
    setCurrentView(view);
  };

  
  return (
    <div className="homePage">
      <Sidebar onMenuItemClick={handleMenuItemClick} activeView={currentView} />
      <div className="feedContainer">
        <Feed title="Updates" items={mockUpdates} />
        <Feed title="Requests" items={mockRequests} />
        {/* Remove the conditional rendering and always show both feeds */}
      </div>
    </div>
  );
};

export default HomePage;
