// src/components/Feed.js
import React from 'react';
import '../styles/feed.css';
import FeedItem from './feeditem';

const Feed = ({ title, items }) => {
  return (
    <div className="feed">
      <h2>{title}</h2>
      <div className="feed-items">
        {items.map((item, index) => {
          // Assuming each item has a 'type' field
          return (
            <FeedItem
              key={index}
              type={item.type} // This should be 'news' or 'request'
              title={item.title}
              content={item.content}
              // You can still pass the image prop if you have specific images for some items
            />
          );
        })}
      </div>
    </div>
  );
};
export default Feed;

