import React, { useState } from 'react';
import Sidebar from './sidebarmain';
import Feed from './feedmain';
import RequestModal from './requestmodal';
import FulfillModal from './fulfillmodal';
import mockUpdates from '../data/mockData';
import initialMockRequests from '../data/mockRequests';
import '../styles/homepage.css';

const HomePage = () => {
  const [currentView, setCurrentView] = useState('feed');
  const [requests, setRequests] = useState(initialMockRequests);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showFulfillModal, setShowFulfillModal] = useState(false);

  const handleMenuItemClick = (view) => {
    if (view === 'new-request') {
      setShowRequestModal(true);
      setShowFulfillModal(false);
    } else if (view === 'fulfill') {
      setShowFulfillModal(true);
      setShowRequestModal(false);
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
    setRequests(currentRequests => [
      { ...request, id: currentRequests.length + 1, timestamp: new Date().toLocaleString(), type: 'request' },
      ...currentRequests
    ]);
    handleCloseModal();
  };

  const handleFulfillSubmit = (fulfillment) => {
    console.log('Fulfillment submitted:', fulfillment);
    handleCloseModal();
  };

  const toggleFulfillModal = () => {
    setShowFulfillModal(prev => !prev);
  };

  return (
    <div className="homePage">
      <Sidebar onMenuItemClick={handleMenuItemClick} activeView={currentView} />
      <div className="feedContainer">
        <Feed title="Updates" items={mockUpdates} onFulfillClick={toggleFulfillModal} />
        <Feed title="Requests" items={requests} onFulfillClick={toggleFulfillModal} />
      </div>
      {showRequestModal && <RequestModal onClose={handleCloseModal} onSubmit={handleRequestSubmit} />}
      {showFulfillModal && <FulfillModal onClose={handleCloseModal} onSubmit={handleFulfillSubmit} />}
    </div>
  );
};

export default HomePage;