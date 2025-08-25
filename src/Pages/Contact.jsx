import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <h3 className="contact-heading">CONTACT ME</h3>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        {/* Hidden field required by Netlify */}
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
