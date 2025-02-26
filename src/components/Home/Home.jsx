import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-content">
        <h2>Anton Voshchinskiy</h2>

        <p>Junior aspiring Programmer and Developer (specialising in Python). Passionate about gaining hands-on experience in coding and software
        development. Dedicated and passionate about leveraging my skills to contribute effectively to the IT industry while continuously learning
        and growing professionally.</p>
        
        <a href="https://github.com/antonVosc/Budget-Tracker" target="_blank" rel="noopener noreferrer">
          <button className="project-button">Project I currently work on</button>
        </a>
      </div>

      <div className="home-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/python-icon.png" width="auto" height="80px" alt="" />
          </div>
          
          <img src="./assets/images/my-photo.jpg" width="30px" height= "auto" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/java-icon.png" width="auto" height="80px" alt="" />
          </div>
          
          <div className="tech-icon">
            <img src="./assets/images/html-icon.png" width="auto" height="80px" alt="" />
          </div>

          <div className="tech-icon">
            <img src="./assets/images/css-icon.png" width="auto" height="80px" alt="" />
          </div>

          <div className="tech-icon">
            <img src="./assets/images/js-icon.png" width="auto" height="80px" alt="" />
          </div>

          <div className="tech-icon">
            <img src="./assets/images/sql-icon.png" width="auto" height="80px" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;