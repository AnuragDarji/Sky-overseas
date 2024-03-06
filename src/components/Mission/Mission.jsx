import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="wrap-mission">
      <div className="mission-container">
        <div className="mission-content" style={{ backgroundColor: "white"}}>
          <h2 style={{ backgroundColor: "white" }}>Our Mission</h2>
          <svg
            class="title-shape"
            width="355"
            height="15"
            viewBox="0 0 355 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="path"
              d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362"
              stroke="#764AF1"
              stroke-width="3"
              stroke-linecap="square"
            ></path>
            <path
              class="path"
              d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13"
              stroke="#764AF1"
              stroke-width="3"
              stroke-linecap="square"
            ></path>
            <path
              class="path"
              d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985"
              stroke="#FFC44E"
              stroke-width="3"
              stroke-linecap="square"
            ></path>
          </svg>
          <br />
          <br />
          <p style={{ backgroundColor: "white" }}>
            At SKY Overseas, our mission is to empower students with the
            knowledge, resources, and confidence to pursue their dreams of
            studying abroad. We strive to deliver personalized counseling and
            comprehensive services that cater to the unique needs and
            aspirations of each individual.
          </p>
        </div>
        <div style={{ backgroundColor: "white" }}>
          <img
            src="https://themeim.com/demo/eduplan/assets/img/sections/about/student-in-library.png"
            alt="mission-img"
            style={{ width: "30vw" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Mission;
