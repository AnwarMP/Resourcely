import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';
import logoImage from '../assets/resourcelylogo.png'; // Make sure the path is correct


const SidebarMain = ({ onMenuItemClick, activeView }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Assuming you handle logout logic here
    navigate('/');
  };

  return (
    <div className="sidebar">
      <img src={logoImage} alt="Resourcely Logo" className="sidebar-logo" />
      <h1>Resourcely</h1>
      <button className="request-button" onClick={() => onMenuItemClick('new-request')}>Request</button>
      <ul>
        <li>
          <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
            Feed
          </NavLink>
        </li>
        <li>
          <NavLink to="/requests" className={({ isActive }) => isActive ? 'active' : ''}>
            Requests
          </NavLink>
        </li>
        <li>
          <NavLink to="/offers" className={({ isActive }) => isActive ? 'active' : ''}>
            Offers
          </NavLink>
        </li>
        <li>
          <NavLink to="/map" className={({ isActive }) => isActive ? 'active' : ''}>
            Resource Map
          </NavLink>
        </li>
        <li>
          <NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
            Profile
          </NavLink>
        </li>
      </ul>
      <div className="logout-container">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    </div>
  );
};

export default SidebarMain;
