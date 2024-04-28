// src/components/FeedItem.js
import React, { useState } from 'react';
import '../styles/feeditem.css';
import newsIcon from '../assets/sirenIcon.png';
import requestIcon from '../assets/requestIcon.jpeg';

const FeedItem = ({ type, title, content, imageUrl, username, timestamp }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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
          </>
        )}
      </div>
    </div>
  );
};

export default FeedItem;
