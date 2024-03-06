import React, { useState } from "react";
import "./FAQ.css";
import Dropdown from "./Dropdown/Dropdown";

const FAQ = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleAskQuestionClick = () => {
    // Set the state to show the form or modal
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    // Set the state to hide the form or modal
    setFormVisible(false);
  };

  const handleSubmitQuestion = (question) => {
    // Handle the submitted question, e.g., send it to a server
    console.log("Submitted Question:", question);

    // Close the form or modal after submitting
    handleCloseForm();
  };

  return (
    <div className="faq-container">
      <div className="faq-content" style={{ backgroundColor: "white" }}>
        <span style={{ backgroundColor: "white" }}>FAQ</span>
        <br />
        <h2 style={{ backgroundColor: "white" }}>Frequently Asked Questions</h2>
        <svg
          class="title-shape"
          width="355"
          height="15"
          viewBox="0 0 355 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ backgroundColor: "white" }}
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
          Still do you have any questions to know?
        </p>
        <p style={{ backgroundColor: "white" }}>
          Feel free to ask our experts here.
        </p>
        <br />
        <button className="btn" onClick={handleAskQuestionClick}>
          ASK YOUR QUESTIONS
        </button>
        {isFormVisible && (
          <div className="form-modal" style={{backgroundColor: 'white'}}>
            <br />
            {/* Question form */}
            <form onSubmit={(e) => e.preventDefault()} style={{backgroundColor: 'white'}}>
              <label htmlFor="questionInput">Your Question:</label>
              <textarea
                id="questionInput"
                name="questionInput"
                rows="4"
                required
              ></textarea>

              <button onClick={handleCloseForm} className="btn" style={{marginRight: '10px'}}>
                Close
              </button>
              <button
                type="submit"
                className="btn"
                onClick={() =>
                  handleSubmitQuestion(
                    document.getElementById("questionInput").value
                  )
                }
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
      <div className="faq-dropdown" style={{ backgroundColor: "white" }}>
        <Dropdown
          head="1. How can SKY Overseas help me with my study abroad plans?"
          para="At SKY Overseas, we offer a range of services, including personalized counseling, university selection, admission application assistance, visa support, and more, to streamline your study abroad journey."
        />
        <Dropdown
          head="2. What countries do you provide services for?"
          para="We provide guidance and support for studying in various countries across the globe, including popular destinations like the USA, UK, Canada, Australia, New Zealand, Europe, and more."
        />
        <Dropdown
          head="3. How do I get started with SKY Overseas?"
          para="Simply reach out to us via phone or email to schedule a consultation with one of our experienced counselors. We'll discuss your goals, preferences, and any concerns you may have to tailor our services to your needs."
        />
        <Dropdown
          head="4. Do you offer assistance with scholarships and financial aid?"
          para="Yes, we provide guidance on financial procedures, including information on scholarships, bank loans, and other financial aid options available for international students."
        />
        <Dropdown
          head="5. What kind of support do you provide after I've been accepted into a university?"
          para="Our support doesn't end with acceptance! We offer pre-departure support, including assistance with travel arrangements, accommodation, visa applications, and essential pre-departure information to ensure a smooth transition to your new academic environment."
        />
      </div>
    </div>
  );
};

export default FAQ;
