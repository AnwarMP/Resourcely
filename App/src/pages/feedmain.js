// src/components/FeedMain.js
import React from 'react';
import FeedItem from './feeditem'; // Make sure to import FeedItem correctly
import '../styles/feed.css';

const FeedMain = ({ title, items, onFulfillClick }) => {  // Make sure to accept onFulfillClick as a prop
  return (
    <div className="feed">
      <h2>{title}</h2>
      <div className="feed-items">
        {items.map((item) => (
          <FeedItem
            key={item.id}
            type={item.type}
            title={item.title}
            content={item.content}
            imageUrl={item.imageUrl}
            username={item.username}
            timestamp={item.timestamp}
            onFulfillClick={onFulfillClick}  // Pass the onFulfillClick to each FeedItem
          />
        ))}
      </div>
    </div>
  );
};

export default FeedMain;
