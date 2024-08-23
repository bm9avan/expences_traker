import React from 'react';
import './Profile.css'; // Import the CSS file for styles

export default function Profile({ user, logout }) {
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={user.photoURL || "https://cdn.pixabay.com/photo/2017/06/13/12/54/profile-2398783_1280.png"}
        alt="USER"
      />
      <div className="profile-email">{user.email}</div>
      <button className="logout-button" onClick={logout}>
        Log Out
      </button>
    </div>
  );
}
