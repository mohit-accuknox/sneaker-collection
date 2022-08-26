import React from "react";
import Banner from "../Banner/Banner";
import "../styles/Contact.css";

const Contact = () => {

    
  return (
    <div>
      <Banner title={"ContactUs"} />
      <div className="containerContact">
        <div className="ContactUs">
          <p className="getInTouch">Get in touch</p>
          <h3 className="headingContact">
            Visit one of our agency locations or contact us today
          </h3>
          <p className="headOffice">Head Office</p>
          <div className="containerDetail">
            <p className="address">
              <i class="bx bx-map-alt"></i> 56 GlassFord Street Glasgow G1 1UL
              New York
            </p>
            <p className="email">
              <i class="bx bx-envelope"></i> contact@example.com
            </p>
            <p className="phone">
              <i class="bx bxs-phone"></i> contact@example.com
            </p>
            <p className="timing">
              <i class="bx bx-time-five"></i> Monday to Saturday: 9.00amd to
              16pm
            </p>
          </div>
        </div>
        <form action="#" className="ContactForm">
          <input type="text" name="text" id="text" placeholder="Your Name" />
          <input type="email" name="mail" id="mail" placeholder="E-mail" />
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Subject"
          />
          <textarea
            name="Message"
            id="message"
            cols="40"
            rows="10"
            placeholder="Your Message"
          ></textarea>

          <button type="submit" onClick={e => e.preventDefault()}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
