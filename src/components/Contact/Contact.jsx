import React from "react";
import "./Contact.css";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className="contact" id="contact-section">
      <div className="contact-info">
        <h2>Contact Information</h2>
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
        <span>
          <strong>Visit our office at:</strong>
        </span>
        <p>209/B, Second Floor, Sahjanand Plaza, Paldi, Ahmedabad - 380007.</p>
        <br />
        <span>
          <strong>For inquiries, contact us:</strong>
        </span>
        <ul>
          <li>
            <strong>Phone:</strong> 079-47771608 / 9033044853
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:paldi@skyoverseas.org">paldi@skyoverseas.org</a>
          </li>
        </ul>
        <br />
        <span>
          <strong>Preferred Contact Method:</strong>
        </span>{" "}
        <p>
          Reach out via phone or email, and our dedicated team will assist you
          promptly.
        </p>
      </div>
      <div>
        <Form />
      </div>
    </div>
  );
};

export default Contact;
