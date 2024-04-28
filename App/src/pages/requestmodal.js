// src/components/RequestModal.js
import React, { useState } from 'react';
import '../styles/requestmodal.css'; // Ensure the path matches where the CSS file is located

const RequestModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState(''); // Add state for location
  const [description, setDescription] = useState('');

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Submit a Request</h2>
        <form onSubmit={(e) => {
          e.preventDefault();
          onSubmit({ title, location, description }); // Include location in the submission
        }}>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
          </label>
          <label>
            Location: {/* New Location input field */}
            <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
          </label>
          <label>
            Description:
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
          </label>
          <div className="button-container">
            <button type="button" className="close-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-button">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;
