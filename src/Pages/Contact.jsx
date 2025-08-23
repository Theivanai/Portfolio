// import React from 'react';

// function Contact() {
//     return (
//         <div className="container py-5">
           
//             <form
//                 className="mx-auto p-4 border rounded shadow"
//                 style={{ maxWidth: "400px", background: "#fff" }}
//             >
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label">Name</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="name"
//                         name="name"
//                         placeholder="Enter your name"
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         placeholder="Enter your email"
//                         required
//                     />
//                 </div>

//                 <div className="mb-3">
//                     <label htmlFor="message" className="form-label">Message</label>
//                     <textarea
//                         className="form-control"
//                         id="message"
//                         name="message"
//                         rows="4"
//                         placeholder="Write your message here"
//                         required
//                     ></textarea>
//                 </div>

//                 <div className="text-center">
//                     <button type="submit" className="btn btn-primary">Send Message</button>
//                 </div>
//             </form>
//         </div>
//     );
// }

// export default Contact;




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
