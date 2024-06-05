import React from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div className="language">
        <select>
          <option value="en">English</option>
        </select>
      </div>
      <div className="auth-links">
        <NavLink to="/login" className="register">
          Sign in
        </NavLink>
        <NavLink to="/sign-up" className="register">
          Register
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
