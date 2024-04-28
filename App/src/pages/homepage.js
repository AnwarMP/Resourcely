// src/pages/HomePage.js
import React, { useState } from 'react';
import Sidebar from './sidebarmain'; // Corrected import for Sidebar
import Feed from './feedmain'; // Corrected import for Feed
import RequestModal from './requestmodal'; // Corrected import for RequestModal
import mockUpdates from '../data/mockData';
import mockRequests from '../data/mockRequests';
import '../styles/homepage.css';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('feed'); // Default view is 'feed'
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const handleMenuItemClick = (view) => {
    if (view === 'new-request') {
      setShowModal(true); // Open the modal when 'Request' is clicked
    } else {
      setCurrentView(view);
      setShowModal(false); // Close modal on other view selections
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Function to close the modal
  };

  const handleRequestSubmit = (request) => {
    console.log('Request submitted:', request);
    // Additional logic can be implemented here for request submission
    handleCloseModal(); // Close modal after submitting request
  };

  return (
    <div className="homePage">
      <div className="feedContainer">
        <Feed title="Updates" items={mockUpdates} />
        <Feed title="Requests" items={mockRequests} />
      </div>
      {showModal && <RequestModal onClose={handleCloseModal} onSubmit={handleRequestSubmit} />}
    </div>
  );
};

export default HomePage;
