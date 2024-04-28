// src/pages/OffersPage.js
import React from 'react';
import OfferCard from './offercard'; // Ensure these are the correct import paths
import RequestCard from './requestcard';
import mockOffers from '../data/mockOffers'; // Import mock data
import '../styles/offerspage.css'; // Import corresponding CSS file

const OffersPage = () => {
  const handleAccept = (requestId) => {
    console.log('Accepted request:', requestId);
    // Implement accept functionality
  };

  const handleReject = (requestId) => {
    console.log('Rejected request:', requestId);
    // Implement reject functionality
  };

  return (
    <div className="offers-page">
      {/* Wrap the titles within the offer-row for proper alignment */}
      <div className="offer-row">
        <div className="offer-column">
          <div className="column-title">Outgoing Offers</div>
        </div>
        <div className="column-separator"></div>
        <div className="request-column">
          <div className="column-title">Pending Requests</div>
        </div>
      </div>
      {/* Map through the offers and requests as before */}
      {mockOffers.map(offer => (
        <div key={offer.id} className="offer-row">
          <div className="offer-column">
            <OfferCard offer={offer} />
          </div>
          <div className="column-separator"></div>
          <div className="request-column">
            {offer.requests.map(request => (
              <RequestCard
                key={request.id}
                request={request}
                onAccept={handleAccept}
                onReject={handleReject}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersPage;
