import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2>Anton Voshchinskiy</h2>

        <p>Welcome to my website! I am a Developer (specialising in Python) experienced in software development and data processing, with hands-on experience in data analysis and
          website optimisation. Seeking an entry-level position as Python Developer. Recent graduate from Royal Holloway University of London. Skilled
          in visualising data and automating tasks using Python.</p>
        
        <a href="https://github.com/antonVosc/Budget-Tracker" target="_blank" rel="noopener noreferrer">
          <button className="project-button">Project I currently work on</button>
        </a>
      </div>

      <div className="home-img">
        <div>
          <img src="./assets/images/my-photo.jpg" width="30px" height= "auto" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;