import React, { useState } from "react";
import "./Home.css";
import { PROJECTS } from "../../utils/data";

const Home = () => {
  const today = new Date();
  const targetDate =
    today.getDate() >= 4
      ? today
      : new Date(today.getFullYear(), today.getMonth() - 1);

  const currentYear = today.getFullYear();

  // All months
  const allMonths = Array.from({ length: 12 }, (_, i) =>
    new Date(0, i).toLocaleString("en-US", { month: "long" })
  );

  // State for dropdowns
  const [selectedYear, setSelectedYear] = useState(targetDate.getFullYear());
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(targetDate.getMonth());

  // Years dropdown
  const years = [];
  for (let year = 2025; year <= currentYear; year++) {
    years.push(year);
  }

  // Months dropdown depending on selected year
  const months =
    selectedYear === currentYear
      ? allMonths.slice(0, today.getMonth() + 1)
      : allMonths;

  // Example visitor data (month indexes)
  const visitorData = {
    2025: {
      0: 20, // January
      1: 25,
      2: 40,
      3: 60,
    },
    2026: {
      0: 15,
      1: 30,
      2: 45,
    },
  };

  // Dynamic stats
  const monthlyVisitors =
    visitorData[selectedYear]?.[selectedMonthIndex] ?? 0;
  const yearlyVisitors = Object.values(visitorData[selectedYear] || {}).reduce(
    (sum, val) => sum + val,
    0
  );

  const STATS = [
    { top: "Years of", value: 2, suffix: "+", bottom: "Experience" },
    { top: "Projects", value: 20, suffix: "+", bottom: "Completed" },
    {
      top: "Website Visitors",
      value: monthlyVisitors,
      type: "month",
    },
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
        
              {/* Inline "in" text with dropdowns */}
              <span className="counter-bottom">
                in{" "}
                {item.type === "month" ? (
                  <select
                    value={selectedMonthIndex}
                    onChange={(e) => setSelectedMonthIndex(Number(e.target.value))}
                    className="inline-dropdown"
                  >
                    {months.map((month, idx) => {
                      const monthIndex =
                        selectedYear === currentYear && idx > today.getMonth()
                          ? today.getMonth()
                          : selectedYear === currentYear
                          ? idx
                          : idx;
                      return (
                        <option key={month} value={monthIndex}>
                          {month}
                        </option>
                      );
                    })}
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
                ) : (
                  item.bottom
                )}
              </span>
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
