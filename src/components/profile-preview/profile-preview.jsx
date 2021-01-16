import React from 'react';

import './profile-preview.scss';

const ProfilePreviewItem = (props) => {
  const {
    FirstName,
    LastName,
    Gender,
    PaymentMethod,
    UserName,
  } = props.userData;

  return (
    <div className="profile-preview">
      <header>
        <h3>
          {FirstName} {LastName}
        </h3>
      </header>
      <p className="username">
        <span className="label">Username:</span>
        {UserName}
      </p>
      <p className="gender">
        <span className="label">Gender:</span>
        {Gender}
      </p>
      <p className="payment">
        <span className="label">Paid Via:</span>
        {PaymentMethod}
      </p>
      <button onClick={props.showDetails}>Show Details</button>
    </div>
  );
};

export default ProfilePreviewItem;
