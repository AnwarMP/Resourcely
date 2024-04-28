// src/pages/ProfilePage.js
import React from 'react';
import '../styles/profilepage.css'; // Make sure the path is correct
import profilePicture from '../assets/bunny.jpeg'; // Update with the correct path to the image

const ProfilePage = () => {
  // Replace these with actual data or state
  const userInfo = {
    name: 'Sam Altman',
    bio: 'Innovator. Entrepreneur. Occasional adventurer.',
    address: '1234 Silicon Valley Drive, Tech City, CA',
    phone: '(123) 456-7890'
  };

  return (
    <div className="profile-page">
      <div className="profile-card">
        <img src={profilePicture} alt="Profile" className="profile-picture" />
        <h1>{userInfo.name}</h1>
        <p className="bio">{userInfo.bio}</p>
        <p className="info"><strong>Home:</strong> {userInfo.address}</p>
        <p className="info"><strong>Phone:</strong> {userInfo.phone}</p>
      </div>
    </div>
  );
};

export default ProfilePage;
