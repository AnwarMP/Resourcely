// src/components/Sidebar.js
import React from 'react';
import '../styles/sidebar.css';

const Sidebar = ({ onMenuItemClick }) => {
  return (
    <div className="sidebar">
      <h1>Resourcely</h1>
      <ul>
        <li onClick={() => onMenuItemClick('feed')}>Feed</li>
        <li onClick={() => onMenuItemClick('requests')}>Requests</li>
        <li onClick={() => onMenuItemClick('offers')}>Offers</li>
        <li onClick={() => onMenuItemClick('profile')}>Profile</li>
      </ul>
    </div>
  );
};

export default Sidebar;
