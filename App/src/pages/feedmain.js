// src/components/Feed.js
import React from 'react';
import '../styles/feed.css';

const Feed = ({ title, items }) => {
  return (
    <div className="feed">
      <h2>{title}</h2>
      <div className="feed-items">
        {items.map((item, index) => (
          <div key={index} className="feed-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Feed;
