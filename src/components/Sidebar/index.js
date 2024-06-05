import Cookies from "js-cookie";
import React from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";

const Sidebar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Cookies.remove("userDetails");
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  }
  return (
    <div className="sidebar">
      <div className="logo">LOGO</div>
      <nav className="navigation">
        <div>
          <div className="sidebar-logo-and-text-container">
            <div className="home-logo-container"></div>
            <p className="home-text">Home</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="notifications-logo-container"></div>
            <p className="notifications-text">Notifications</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="shop-logo-container"></div>
            <p className="shop-text">Shop</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="conversation-logo-container"></div>
            <p className="conversation-text">conversation</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="wallet-logo-container"></div>
            <p className="wallet-text">Wallet</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="subscription-logo-container"></div>
            <p className="subscription-text">Subscription</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="profile-logo-container"></div>
            <p className="profile-text">My Profile</p>
          </div>
          <div className="sidebar-logo-and-text-container">
            <div className="settings-logo-container"></div>
            <p className="settings-text">Settings</p>
          </div>
        </div>
      </nav>

      <div className="sidebar-logo-and-text-container" onClick={handleLogout}>
        <div className="logout-logo-container"></div>
        <p className="logout-text">Log out</p>
      </div>
    </div>
  );
};

export default Sidebar;
