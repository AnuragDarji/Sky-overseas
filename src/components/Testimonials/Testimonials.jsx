import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2 style={{ textAlign: "center", backgroundColor: 'white' }}>Testimonials</h2>
      <svg class="title-shape" width="355" height="15" viewBox="0 0 355 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="path" d="M351.66 12.6362C187.865 -6.32755 49.6478 6.37132 3.41142 12.6362" stroke="#764AF1" stroke-width="3" stroke-linecap="square"></path>
                                    <path class="path" d="M351.66 13C187.865 -5.96378 49.6478 6.73509 3.41142 13" stroke="#764AF1" stroke-width="3" stroke-linecap="square"></path>
                                    <path class="path" d="M2.5 5.5C168.5 2.0001 280.5 -1.49994 352.5 8.49985" stroke="#FFC44E" stroke-width="3" stroke-linecap="square"></path>
                                </svg>
      <br />
      <br />
      <div className="testimonials-content">
        <h4 style={{ fontSize: "1.4rem", backgroundColor: 'white', }}>
          While we gather testimonials from our students, here's an example of
          what one might say:
        </h4>
        <br />
        <p style={{backgroundColor: 'white'}}>
          "I am immensely grateful to SKY Overseas for their unwavering support
          and guidance throughout my journey to study abroad. Their personalized
          approach and attention to detail made all the difference in achieving
          my educational goals."
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
