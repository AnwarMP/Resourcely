// src/components/OfferCard.js
import React from 'react';
import '../styles/offercard.css'; // Import corresponding CSS file

const OfferCard = ({ offer }) => {
  return (
    <div className="offer-card">
      <h3>{offer.item}</h3> {/* Item name is now centered and larger */}
      <p><strong>DETAIL:</strong> {offer.detail}</p>
      <p><strong>QUANTITY:</strong> {offer.quantity}</p>
    </div>
  );
};

export default OfferCard;
