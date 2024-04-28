import React from 'react';
import FeedItem from './feeditem'; // Make sure to import FeedItem correctly
import '../styles/feed.css';

const FeedMain = ({ title, items, onFulfillClick }) => {
  return (
    <div className="feed">
      <h2>{title}</h2>
      <div className="feed-items">
        {items.map((item) => (
          <FeedItem
            key={item.id}
            type={item.type}
            title={item.title}
            content={item.description || item.content}
            imageUrl={item.imageUrl}
            username={item.username}
            timestamp={item.timestamp}
            onFulfillClick={onFulfillClick} // Correctly pass onFulfillClick to each FeedItem
          />
        ))}
      </div>
    </div>
  );
};

export default FeedMain;
