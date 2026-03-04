import React, { useState } from "react";
import "./Home.css";
import { PROJECTS } from "../../utils/data";

const Home = () => {
  const today = new Date();
  const targetDate = today.getDate() >= 4 ? today : new Date(today.getFullYear(), today.getMonth() - 1);
  const [selectedYear, setSelectedYear] = useState(targetDate.getFullYear());
  const allMonths = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString("en-US", { month: "long" }));
  const [selectedMonth, setSelectedMonth] = useState(allMonths[targetDate.getMonth()]);
  const years = [];
  
  for (let year = 2025; year <= currentYear; year++) {
    years.push(year);
  }
  
  const months = selectedYear === currentYear ? allMonths.slice(0, targetDate.getMonth() + 1) : allMonths;

  const visitorData = {
    2025: {
      0: 20,  // January
      1: 25,
      2: 40,
      3: 60,
    },
    2026: {
      0: 15,
      1: 30,
    }
  };

  const monthlyVisitors = visitorData[selectedYear]?.[selectedMonth] ?? 0;
  const yearlyVisitors = Object.values(visitorData[selectedYear] || {}).reduce((sum, val) => sum + val, 0);
  
  <div className="filters">
    <select
      value={selectedMonth}
      onChange={(e) => setSelectedMonth(e.target.value)}
    >
      {months.map((month) => (
        <option key={month} value={month}>
          {month}
        </option>
      ))}
    </select>
  
    <select
      value={selectedYear}
      onChange={(e) => setSelectedYear(Number(e.target.value))}
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>
  
  const STATS = [
          { top: "Years of", value: 2, suffix: "+", bottom: "Experience" },
          { top: "Projects", value: 20 , suffix: "+", bottom: "Completed" },
          { top: "People Visited Website", value: monthlyVisitors, bottom: `in ${selectedMonth}` },
          { top: "People Visited Website", value: yearlyVisitors, bottom: `in ${selectedYear}` },
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
