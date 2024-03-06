import React, { useState } from "react";
import "./Services.css";
import Card from "./Card/Card";

const Services = () => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };
  return (
    <div className="services-container">
      <h2>Our Services</h2>
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
      <br />
      <div className="grid-container">
        <Card
          label="Overseas Education"
          para="Discover your global academic opportunities with our comprehensive overseas education guidance, tailored to your aspirations and preferences."
        />
        <Card
          label="Career Counseling"
          para="Gain clarity and direction in your career path with expert counseling sessions, helping you make informed decisions for a successful future."
        />
        <Card
          label="University Course Selection"
          para="Navigate through a myriad of university courses worldwide and find the perfect match for your academic interests and career goals."
        />

        {showMore && (
          <>
            <Card
              label="Admission Application"
              para="Seamlessly navigate the application process with our assistance, ensuring timely submission and adherence to all requirements."
            />
            <Card
              label="Bank Loan and Financial Procedures"
              para="Navigate the complex financial procedures with ease, including guidance on bank loans and financial documentation for your education abroad."
            />
            <Card
              label="Visa Assistance"
              para="Simplify the visa application process with our expert guidance and support, ensuring a smooth and hassle-free experience."
            />

            <Card
              label="Foreign Bank Accounts and Insurance"
              para="Secure your finances and health abroad with assistance in setting up foreign bank accounts and obtaining comprehensive insurance coverage."
            />
            <Card
              label="Travel Arrangements"
              para="Plan your journey with confidence, benefiting from our expertise in arranging seamless travel logistics for your education abroad."
            />
            <Card
              label="Forex"
              para="Optimize your currency exchange with our forex services, ensuring favorable rates and efficient transactions for your international expenses."
            />

            <Card
              label="Pre Departure Information"
              para="Prepare for your journey ahead with essential pre-departure information, covering everything from accommodation to cultural adaptation tips."
            />
            <Card
              label="Onshore Assistance"
              para="Feel supported every step of the way with our onshore assistance services, providing guidance and support throughout your stay abroad."
            />
            <Card
              label="Spouse and Dependent Visa Applications"
              para="Extend your support network abroad with assistance in navigating spouse and dependent visa applications, ensuring your loved ones can join you seamlessly."
            />
          </>
        )}
      </div>
      <br />
      <div className="read-more">
        <button onClick={handleReadMoreClick} className="btn">
          {showMore ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Services;
