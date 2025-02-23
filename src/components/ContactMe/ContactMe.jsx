import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{ flex: 1 }}>
            <ContactInfoCard iconUrl="./assets/images/linkedin-icon.png" text="LinkedIn" link="http://linkedin.com/in/anton-voshchinskiy-809794277/"/>
            <ContactInfoCard iconUrl="./assets/images/github-icon.png" text="GitHub" link="https://github.com/antonVosc/" />
            <ContactInfoCard iconUrl="./assets/images/email-icon.png" link="mailto:anton.vosc@gmail.com" />
            </div>

            <div style={{ flex: 1 }}>
                <ContactForm />
            </div>
        </div>
    </section>
  );
};

export default ContactMe;