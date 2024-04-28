// src/components/FulfillModal.js
import React, { useState } from 'react';
import '../styles/fulfillmodal.css';

const FulfillModal = ({ onClose, onSubmit }) => {
  const [offering, setOffering] = useState('');

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <h2>Your Offering</h2>
        <textarea
          value={offering}
          onChange={(e) => setOffering(e.target.value)}
          placeholder="Describe your offering..."
          required
        />
        <div className="button-container">
          <button type="button" className="close-button" onClick={onClose}>Cancel</button>
          <button type="submit" className="submit-button" onClick={() => onSubmit(offering)}>Submit Offering</button>
        </div>
      </div>
    </div>
  );
};

export default FulfillModal;
