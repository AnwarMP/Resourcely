// src/components/Sidebar.js
import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({ onMenuItemClick, activeView }) => {
  return (
    <div className="sidebar">
      <h1>Resourcely</h1>
      <ul>
      <li
          className={activeView === 'feed' ? 'active' : ''}
          onClick={() => onMenuItemClick('feed')}
        >
          Feed
        </li>
        <li onClick={() => onMenuItemClick('requests')}>Requests</li>
        <li onClick={() => onMenuItemClick('offers')}>Offers</li>
        <li onClick={() => onMenuItemClick('profile')}>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
