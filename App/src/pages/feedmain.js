// src/components/Feed.js
import React from 'react';
import '../styles/feed.css';
import FeedItem from './feeditem';

const Feed = ({ title, items }) => {
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
            imageUrl={item.imageUrl} // Pass the image URL to the FeedItem
          />
        ))}
      </div>
    </div>
  );
};

export default Feed;