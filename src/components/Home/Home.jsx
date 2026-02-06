import React from "react";
import "./Home.css";
import { PROJECTS } from "../../utils/data";

const Home = () => {
  const STATS = [
          { top: "Years of", value: 2, suffix: "+", bottom: "Experience" },
          { top: "Projects", value: 20 , suffix: "+", bottom: "Completed" },
          { top: "People Visited Website", value: 12, bottom: "in "+new Date().toLocaleString("en-US", { month: "long" }) },
          { top: "People Visited Website", value: 41, bottom: "in "+new Date().getFullYear() },
        ];
  
  return (
    <section className="home-container">
      <div className="home-content">
        <div className="counter-row">
          {STATS.map((item, index) => (
            <div className="counter-card" key={index}>
              <span className="counter-top">{item.top}</span>
        
              <div className="flip-number">
                <span>
                  {item.value}
                  {item.suffix && <span className="plus">+</span>}
                </span>
              </div>
        
              <span className="counter-bottom">{item.bottom}</span>
            </div>
          ))}
        </div>
        
        <h2>Anton Voshchinskiy</h2>

        <p>Welcome to my website! I am a Developer (specialising in Python) experienced in software development and data processing, with hands-on experience in data analysis and
          website optimisation. Seeking an entry-level position as Python Developer. Recent graduate from Royal Holloway University of London. Skilled
          in visualising data and automating tasks using Python.</p>
        
        <a href={PROJECTS[0].link} target="_blank" rel="noopener noreferrer">
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
