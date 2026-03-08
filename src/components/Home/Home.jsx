import React, { useState } from "react";
import "./Home.css";
import { PROJECTS } from "../../utils/data";

const Home = () => {
  const today = new Date();
  const targetDate = today.getDate() >= 4 ? today : new Date(today.getFullYear(), today.getMonth() - 1);
  const currentYear = today.getFullYear();
  const allMonths = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString("en-US", { month: "long" }));
  const [selectedYear, setSelectedYear] = useState(targetDate.getFullYear());
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(targetDate.getMonth());
  
  const years = [];
  for (let year = 2025; year <= currentYear; year++) {
    years.push(year);
  }
  
  const months = selectedYear === currentYear ? allMonths.slice(0, today.getMonth() + 1) : allMonths;

  const visitorData = {
    2025: {
      3: 12,
      4: 22,
      5: 15,
      6: 15,
      7: 11,
      8: 10,
      9: 8,
      10: 9,
      11: 14,
    },
    2026: {
      0: 29, // January
      1: 65,
      2: 20,
    },
  };
  
  const availableMonths = visitorData[selectedYear] ? Object.keys(visitorData[selectedYear]).map(Number) : [];
  const effectiveMonthIndex = availableMonths.includes(selectedMonthIndex) && availableMonths.length > 0 ? selectedMonthIndex : availableMonths.length > 0 ? availableMonths[0] : null;
  
  const monthlyVisitors = effectiveMonthIndex !== null ? visitorData[selectedYear][effectiveMonthIndex] : null;
  const yearlyVisitors = Object.values(visitorData[selectedYear] || {}).reduce((sum, val) => sum + val, 0);

  const STATS = [
    { top: "Years of", value: 2, suffix: "+", bottom: "Experience" },
    { top: "Projects", value: 20, suffix: "+", bottom: "Completed" },
    { top: "Website Visitors", value: monthlyVisitors, type: "month", },
    { top: "Website Visitors", value: yearlyVisitors, type: "year", },
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
              
              {index < 2 && item.bottom && (
                <span className="counter-bottom">{item.bottom}</span>
              )}
              
              {index >= 2 && (item.type === "month" || item.type === "year") && (
                <span className="counter-bottom">
                  in{" "}
                  {item.type === "month" && effectiveMonthIndex !== null ? (
                    <select
                      value={effectiveMonthIndex}
                      onChange={(e) => setSelectedMonthIndex(Number(e.target.value))}
                      className="inline-dropdown"
                    >
                      {availableMonths.map((monthIndex) => (
                        <option key={monthIndex} value={monthIndex}>
                          {allMonths[monthIndex]}
                        </option>
                      ))}
                    </select>
                  ) : item.type === "year" ? (
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(Number(e.target.value))}
                      className="inline-dropdown"
                    >
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  ) : null}
                </span>
              )}
            </div>
          ))}
        </div>

        <h2>Anton Voshchinskiy</h2>
        <p>
          Welcome to my website! I am a Developer (specialising in Python)
          experienced in software development and data processing, with
          hands-on experience in data analysis and website optimisation.
          Seeking an entry-level position as Python Developer. Recent graduate
          from Royal Holloway University of London. Skilled in visualising data
          and automating tasks using Python.
        </p>

        <a href={PROJECTS[0].link} target="_blank" rel="noopener noreferrer">
          <button className="project-button">Project I currently work on</button>
        </a>
      </div>

      <div className="home-img">
        <div>
          <img
            src="./assets/images/my-photo.jpg"
            alt="Anton Voshchinskiy"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
