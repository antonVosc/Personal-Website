import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { firstname, lastname, email, message } = formData;

    // Create email subject and body
    const subject = "Contact Form Message";
    const body = `Name: ${firstname} ${lastname}\nEmail: ${email}\n\nMessage: ${message}`;

    // You would typically use an API like Web3Forms or your own backend to send the email.
    // Web3Forms is already set in your form, so you can keep it, but you must submit it.

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "4cbb63f4-e7f9-4978-bada-2dcbe3bbaa66");
    formDataToSend.append("firstname", firstname);
    formDataToSend.append("lastname", lastname);
    formDataToSend.append("email", email);
    formDataToSend.append("message", message);

    // Send data to Web3Forms API
    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Message sent successfully!");
        } else {
          alert("Something went wrong, please try again later.");
        }
      })
      .catch((error) => {
        alert("Error sending message. Please try again.");
      });
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="hidden"
            name="access_key"
            value="4cbb63f4-e7f9-4978-bada-2dcbe3bbaa66"
          />
          <input
            type="text"
            name="firstname"
            placeholder="First Name*"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name*"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message*"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;