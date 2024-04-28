// src/components/FeedItem.js
import React, { useState } from 'react';
import '../styles/feeditem.css';
import newsIcon from '../assets/newsUpdateIcon.jpeg'; // Your news icon
import requestIcon from '../assets/requestIcon.jpeg'; // Your request icon

const FeedItem = ({ type, title, content, imageUrl }) => {
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
              {imageUrl && <img src={imageUrl} alt="Related to update" className="feed-expanded-image" />}
            </>
          )}
        </div>
      </div>
    );
  };

export default FeedItem;

