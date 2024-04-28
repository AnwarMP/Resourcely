// src/components/FeedMain.js
import React from 'react';
import FeedItem from './feeditem'; // Make sure to import FeedItem
import '../styles/feed.css';

const FeedMain = ({ title, items }) => {
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
          />
        ))}
      </div>
    </div>
  );
};

export default FeedMain;
