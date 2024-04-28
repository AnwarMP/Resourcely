import React, { useState } from 'react';
import '../styles/feeditem.css';
import newsIcon from '../assets/sirenIcon.png';
import requestIcon from '../assets/requestIcon.jpeg';

const FeedItem = ({ type, title, content, imageUrl, username, timestamp, onFulfillClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleFulfillClick = (e) => {
    e.stopPropagation(); // Prevent the event from bubbling up to the parent element
    onFulfillClick(); // Trigger action to open FulfillModal
  };

  const icon = type === 'news' ? newsIcon : requestIcon;

  return (
    <div className={`feed-item ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
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
            {type === 'request' && ( // Only render the Fulfill button for request items
              <button className="fulfill-button" onClick={handleFulfillClick}>Fulfill</button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeedItem;
