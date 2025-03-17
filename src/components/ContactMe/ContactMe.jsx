import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div className="contact-info-container">
              <ContactInfoCard iconUrl="./assets/images/linkedin-icon.png" link="http://linkedin.com/in/anton-voshchinskiy-809794277/" />
              <ContactInfoCard iconUrl="./assets/images/github-icon.png" link="https://github.com/antonVosc/" />
              <ContactInfoCard iconUrl="./assets/images/email-icon.png" text="anton.vosc@gmail.com" link="mailto:anton.vosc@gmail.com" />
            </div>

            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  );
};

export default ContactMe;