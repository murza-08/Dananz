import React from "react";
import "./ContactUs.css"; 

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="form-wrapper">
        <h2 className="form-title">Contact Us</h2>
        <p className="form-description">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" id="firstName" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" id="lastName" placeholder="Last Name" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <div className="phone-input">
              <select>
                <option value="KZ">KZ</option>
                <option value="KG">KG</option>  
                <option value="RU">RU</option>
              </select>
              <input type="tel" id="phone" placeholder="Phone Number" />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Your Message" rows="5"></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="submit-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
