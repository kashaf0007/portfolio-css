import React from 'react';
import{IoLogoGithub} from 'react-icons/io'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="Contact">
      <section className="contactSection">
        <div className="container">
          <div className="header">
            <h1 className="title">Contact</h1>
            <p className="description">Feel Free To Contact</p>
          </div>
          <div className="formContainer">
            <div className="form">
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="input"
                />
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="input"
                />
              </div>
              <div className="field">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="textarea"/>
           </div>
              <div className="action">
                <button className="button">Send Message</button>
              </div>
            </div>
            <div className="info">
              <a href="mailto:amankashafaman@gmail.com" className="email">
                amankashafaman@gmail.com
              </a>
              <p className="address">
                03161329633 <br /> Karachi
              </p>
              <div className="icons">
                <a href="#" className="icon"><FaDiscord /></a>
                <a href="#" className="icon"><FaLinkedin /></a>
                <a href="#" className="icon"> <IoLogoGithub /> </a>
                <a href="#" className="icon"><MdEmail /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
