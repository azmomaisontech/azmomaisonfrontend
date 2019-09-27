import React from "react";

const ContactUs = () => {
  return (
    <div className="contactwrapper">
      <div className="contactitem">
        <h5>Customer Support</h5>
        <p>
          <strong>Phone</strong> : 080-XXX-XXXX
        </p>
        <p>
          <strong>Email</strong> : xxx@azmomaison.com
        </p>
      </div>
      <form className="formitemgrid">
        <h5>Contact Form</h5>
        <div className="formitem">
          <input type="text" id="name" placeholder="Name" />
        </div>
        <div className="formitem">
          <input type="email" id="email" placeholder="Email Address" />
        </div>
        <div className="formitem">
          <input type="text" id="subject" placeholder="Subject" />
        </div>

        <div className="formitem">
          <textarea id="message" rows="4" placeholder="Message" />
        </div>
        <button className="formitem submitb">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
