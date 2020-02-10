import React from 'react';
import ProfilePicture from '../../components/ProfilePicture';
import DateTime from '../../components/DateTime';
import './index.css';

function ProfileBar() {
  return (
    <div className="ProfileBar">
      <ProfilePicture />
      <div className="text">HI, SARVANI</div>
      <DateTime />
    </div>
  );
}

export default ProfileBar;
