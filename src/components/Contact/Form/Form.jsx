import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    studylevel: "",
    countryInterested: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectedItem = (e) => {
    // Log the selected option content
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    console.log("Selected Content:", selectedOption);

    // Update the form data
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, e.g., send data to server
    console.log("Form submitted:", formData);
    setFormData(initialFormData);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} style={{ backgroundColor: "white" }}>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studylevel">Study Level:</label>
          <select
            id="studylevel"
            name="studylevel"
            value={formData.studylevel}
            onChange={handleSelectedItem}
            required
          >
            <option value="">Select study level</option>
            <option value="level1">Grade 9 (Freshman)</option>
            <option value="level2">Grade 10 (Sophomore)</option>
            <option value="level3">Grade 11 (Junior)</option>
            <option value="level4">1-Year Post-Secondary Certificate</option>
            <option value="level5">Grade 12 (Senior)</option>
            <option value="level6">2-Year Undergraduate Diploma</option>
            <option value="level7">3-Year Advanced UndergraduateDiploma</option>
            <option value="level8">3-Year Bachelors Degree</option>
            <option value="level9">4-year Bachelors Degree</option>
            <option value="level10">1-Year Post-Graduate Certificate</option>
            <option value="level11">2-Year Post-Graduate Diploma</option>
            <option value="level12">Master's Degree</option>
            <option value="level13">Doctoral Degree (Ph D)</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="countryInterested">Country Interested:</label>
          <select
            id="countryInterested"
            name="countryInterested"
            value={formData.countryInterested}
            onChange={handleSelectedItem}
            required
          >
            <option value="">Select a country</option>
            <option value="country1">Albania</option>
            <option value="country2">Armenia</option>
            <option value="country3">Australia</option>
            <option value="country">Austria</option>
            <option value="country">Belarus</option>
            <option value="country">Belgium</option>
            <option value="country">Bulgaria</option>
            <option value="country">Canada</option>
            <option value="country">Czech Republic</option>
            <option value="country">Denmark</option>
            <option value="country">Estonia</option>
            <option value="country">Finland</option>
            <option value="country">France</option>
            <option value="country">Georgia</option>
            <option value="country">Germany</option>
            <option value="country">Greece</option>
            <option value="country">Ireland</option>
            <option value="country">Italy</option>
            <option value="country">Latvia</option>
            <option value="country">Lithuania</option>
            <option value="country">Malta</option>
            <option value="country">Moldova</option>
            <option value="country">Netherlands</option>
            <option value="country">New Zealand</option>
            <option value="country">Norway</option>
            <option value="country">Poland</option>
            <option value="country">Portugal</option>
            <option value="country">Romania</option>
            <option value="country">Russia</option>
            <option value="country">Serbia</option>
            <option value="country">Slovakia</option>
            <option value="country">Slovenia</option>
            <option value="country">Spain</option>
            <option value="country">Sweden</option>
            <option value="country">Switzerland</option>
            <option value="country">Turkey</option>
            <option value="country">UK</option>
            <option value="country">Ukraine</option>
            <option value="country">USA</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
