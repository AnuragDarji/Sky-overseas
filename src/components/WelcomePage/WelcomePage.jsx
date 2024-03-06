import React from "react";
import "./WelcomePage.css";

const WelcomePage = () => {

  const scrollToSection = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="welcome-conatainer">
      <div className="welcome-content">
        <span>Powered by SKY Educo</span>
        <br />
        <h1>Welcome to SKY Overseas</h1>
        <br />
        <p>
          Embark on your journey to international education excellence with SKY
          Overseas, your trusted partner in realizing your study abroad
          aspirations. As a franchise of SKY Educo, we are committed to
          providing unparalleled guidance and support to students seeking
          transformative educational experiences worldwide.
        </p>
        <br/>
        <button className="btn" onClick={scrollToSection}>Contact Us</button>
      </div>
      <div className="right-img">
        <img
          src="https://themeim.com/demo/eduplan/assets/img/header/header-img.png"
          alt="main-img"
          style={{width: '40vw'}}
        />
      </div>
    </div>
  );
};

export default WelcomePage;
