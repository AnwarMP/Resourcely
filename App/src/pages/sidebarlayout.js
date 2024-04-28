// src/components/SidebarLayout.js
import React from 'react';
import Sidebar from './sidebarmain'; // Adjust the import path as needed
import '../styles/sidebarlayout.css'; // Assuming you will create a CSS file for this layout

const SidebarLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Sidebar />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default SidebarLayout;
