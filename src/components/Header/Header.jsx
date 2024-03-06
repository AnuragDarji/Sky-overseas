import React from "react";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <span>
          <img
            src="https://themeim.com/demo/eduplan/assets/img/Logos/logo-black.svg"
            alt="logo"
          />
        </span>
      </div>
      <div className="navbar-container">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
