import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <a href={ link } target="_blank" rel="noopener noreferrer" className="contact-details-card">
      <div className="contact-details-inner">
            <div className="icon">
                <img src={ iconUrl } alt={ text } />
            </div>

            <p>{ text }</p>
        </div>
    </a>
  );
};

export default ContactInfoCard;