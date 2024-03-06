import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`dropdown-container ${isOpen ? "open" : ""}`}
      style={{ backgroundColor: "#ffffff" }}
    >
      <div
        className="feature"
        onClick={toggleDropdown}
        style={{ cursor: "pointer" }}
      >
        <h4>
          {props.head}
          <span>
            <i
              className={
                isOpen ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }
            ></i>
          </span>
        </h4>
        {isOpen && (
          <div className="dropdown-content">
            <p>{props.para}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
