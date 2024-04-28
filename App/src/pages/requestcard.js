// src/components/RequestCard.js
import React from 'react';
import '../styles/requestcard.css'; // Import corresponding CSS file

const RequestCard = ({ request, onAccept, onReject }) => {
  return (
    <div className="request-card">
      <div className="request-details">
        <p><strong>ITEM:</strong> {request.item}</p>
        <p><strong>DETAIL:</strong> {request.detail}</p>
        <p><strong>QUANTITY:</strong> {request.quantity}</p> {/* Assuming you have a quantity field */}
      </div>
      <div className="request-actions">
        <button 
          className="action-button accept-button" 
          onClick={() => onAccept(request.id)}
        >
          Accept
        </button>
        <button 
          className="action-button reject-button" 
          onClick={() => onReject(request.id)}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default RequestCard;
