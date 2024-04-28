// src/pages/HomePage.js
import React, { useState } from 'react';
import Sidebar from './sidebarmain';
import Feed from './feedmain';
import mockUpdates from '../data/mockData';
import mockRequests from '../data/mockRequests';
import '../styles/homepage.css';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('updates'); // Default view

  const handleMenuItemClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="homePage">
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div className="feedContainer">
        {currentView === 'updates' && <Feed title="Updates" items={mockUpdates} />}
        {currentView === 'requests' && <Feed title="Requests" items={mockRequests} />}
        {/* Add other views as needed */}
      </div>
    </div>
  );
};

export default HomePage;
