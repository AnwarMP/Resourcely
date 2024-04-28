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
      <Sidebar onMenuItemClick={handleMenuItemClick} />
      <div className="feedContainer">
        {currentView === 'feed' && (
          <>
            <Feed title="Updates" items={mockUpdates} />
            <Feed title="Requests" items={mockRequests} />
          </>
        )}
        {/* You can add other conditional renders for other views like 'offers' and 'profile' here */}
      </div>
    </div>
  );
};

export default HomePage;
