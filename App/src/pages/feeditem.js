// src/components/FeedItem.js
import React, { useState } from 'react';
import '../styles/feeditem.css'; // Make sure your CSS path is correct
import newsIcon from '../assets/sirenIcon.png';
import requestIcon from '../assets/requestIcon.jpeg';

const FeedItem = ({ type, title, content, imageUrl, username, timestamp, onFulfillClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFulfillClick = (e) => {
    e.stopPropagation(); // Stop the event from bubbling up to the parent
    console.log(`Fulfill button clicked for request titled "${title}" with type "${type}"`);
    if (onFulfillClick) {
      onFulfillClick();
    }
  };

  const icon = type === 'news' ? newsIcon : requestIcon;

  return (
    <div className={`feed-item ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand} style={{ cursor: 'pointer' }}>
      <img src={icon} alt={title} className="feed-icon" />
      <div className="feed-content">
        <h3>{title}</h3>
        {isExpanded && (
          <>
            <p>{content}</p>
            {imageUrl && <img src={imageUrl} alt="Detail" className="feed-expanded-image" />}
            <div className="feed-item-info">
              <span className="username">{username}</span>
              <span className="timestamp">{timestamp}</span>
            </div>
            {type === 'request' && (
              <button 
                className="fulfill-button" 
                onClick={handleFulfillClick} 
                aria-label={`Fulfill request for ${title}`}
              >
                Fulfill
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeedItem;
