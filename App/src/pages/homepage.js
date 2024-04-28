// src/pages/HomePage.js
import React, { useState } from 'react';
import Sidebar from './sidebarmain'; // Make sure this is the correct import
import Feed from './feedmain'; // Make sure this is the correct import
import RequestModal from './requestmodal'; // Make sure this is the correct import
import FulfillModal from './fulfillmodal'; // Make sure this is the correct import
import mockUpdates from '../data/mockData';
import mockRequests from '../data/mockRequests';
import '../styles/homepage.css';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('feed');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showFulfillModal, setShowFulfillModal] = useState(false);

  const handleMenuItemClick = (view) => {
    if (view === 'new-request') {
      setShowRequestModal(true);
      setShowFulfillModal(false); // Ensure only the request modal opens
    } else if (view === 'fulfill') {
      setShowFulfillModal(true);
      setShowRequestModal(false); // Ensure only the fulfill modal opens
    } else {
      setCurrentView(view);
      setShowRequestModal(false);
      setShowFulfillModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowRequestModal(false);
    setShowFulfillModal(false);
  };

  const handleRequestSubmit = (request) => {
    console.log('Request submitted:', request);
    handleCloseModal();
  };

  const handleFulfillSubmit = (fulfillment) => {
    console.log('Fulfillment submitted:', fulfillment);
    handleCloseModal();
  };

  return (
    <div className="homePage">
      <Sidebar onMenuItemClick={handleMenuItemClick} activeView={currentView} />
      <div className="feedContainer">
        <Feed title="Updates" items={mockUpdates} onFulfillClick={() => setShowFulfillModal(true)} />
        <Feed title="Requests" items={mockRequests} onFulfillClick={() => setShowFulfillModal(true)} />
      </div>
      {showRequestModal && <RequestModal onClose={handleCloseModal} onSubmit={handleRequestSubmit} />}
      {showFulfillModal && <FulfillModal onClose={handleCloseModal} onSubmit={handleFulfillSubmit} />}
    </div>
  );
};

export default HomePage;
