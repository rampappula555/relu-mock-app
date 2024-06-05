import "./index.css";
import React from "react";

const ProfileCard = ({ name, handle, backGroundImage, image }) => {
  return (
    <div
      className="profile-card"
      style={{ backgroundImage: `url(${backGroundImage})` }}
    >
      <img src={image} alt={name} className="profile-img" />
      <div className="profile-info">
        <h4>{name}</h4>
        <span>{handle}</span>
      </div>
    </div>
  );
};

export default ProfileCard;
