import React from "react";

import "./contactUs.styles.scss";

// icons
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

function ContactUs() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <h3>Any question or remarks? Just leave us a message.</h3>

      <div className="contact__content">
        <div className="contact__content__left">
          <h1>Contact Information</h1>
          <h3>Fill up the form and our team will get back to you ASAP! </h3>
          <div className="contact__infos">
            <div className="contact__info">
              <div className="contact__icons">
                <BsFillTelephoneFill />
              </div>
              <h2>+209 2099320 2823</h2>
            </div>
            <div className="contact__info">
              <div className="contact__icons">
                <AiFillMail />
              </div>
              <h2>ourmail@gmail.com</h2>
            </div>
            <div className="contact__info">
              <div className="contact__icons">
                <GoLocation />
              </div>
              <h2>Optical Shop, Ambala</h2>
            </div>
          </div>
        </div>
        <div className="contact__content__right">
          <div className="contact__upper__inputs">
            <div className="contact__upper__input">
              <label> First Name</label>
              <input type="text" />
            </div>
            <div className="contact__upper__input">
              <label> Last Name</label>
              <input type="text" />
            </div>
            <div className="contact__upper__input">
              <label>  Mail</label>
              <input type="email" />
            </div>
            <div className="contact__upper__input">
              <label> Phone</label>
              <input type="tel" />
            </div>
          </div>
          <div className="contact__lower__input">
            <label> Message</label>
            <input type="text" />
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
