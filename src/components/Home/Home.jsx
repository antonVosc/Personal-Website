import React, { useState, useEffect, useRef } from "react";
import "./Home.css";
import { PROJECTS } from "../../utils/data";

const Home = () => {
  const today = new Date();
  const targetDate = today.getDate() >= 4 ? today : new Date(today.getFullYear(), today.getMonth() - 1);
  const currentYear = today.getFullYear();
  const allMonths = Array.from({ length: 12 }, (_, i) => new Date(0, i).toLocaleString("en-US", { month: "long" }));
  const [selectedYear, setSelectedYear] = useState(targetDate.getFullYear());
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(targetDate.getMonth());

  const [displayValues, setDisplayValues] = useState([0, 0, 0, 0]);
  const [isSpinning, setIsSpinning] = useState(true);
  const animFrameRef = useRef(null);

  const years = [];
  for (let year = 2025; year <= currentYear; year++) {
    years.push(year);
  }

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
      0: 29,
      1: 65,
      2: 55,
    },
  };

  const availableMonths = visitorData[selectedYear] ? Object.keys(visitorData[selectedYear]).map(Number) : [];
  const effectiveMonthIndex = availableMonths.includes(selectedMonthIndex) && availableMonths.length > 0
    ? selectedMonthIndex
    : availableMonths.length > 0 ? availableMonths[0] : null;

  const monthlyVisitors = effectiveMonthIndex !== null ? visitorData[selectedYear][effectiveMonthIndex] : 0;
  const yearlyVisitors = Object.values(visitorData[selectedYear] || {}).reduce((sum, val) => sum + val, 0);

  const TARGET_VALUES = [2, 20, monthlyVisitors, yearlyVisitors];

  useEffect(() => {
    const SPIN_DURATION = 1500;
    const SETTLE_DURATION = 500;
    const TICK_INTERVAL = 60;

    let spinInterval = null;
    
    spinInterval = setInterval(() => {
      setDisplayValues(TARGET_VALUES.map((target) =>
        Math.floor(Math.random() * Math.max(target * 2, 10))
      ));
    }, TICK_INTERVAL);

    const settleTimeout = setTimeout(() => {
      clearInterval(spinInterval);

      const settleStart = performance.now();

      const animate = (now) => {
        const elapsed = now - settleStart;
        const progress = Math.min(elapsed / SETTLE_DURATION, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setDisplayValues(TARGET_VALUES.map((target) =>
          Math.round(eased * target)
        ));

        if (progress < 1) {
          animFrameRef.current = requestAnimationFrame(animate);
        } else {
          setIsSpinning(false);
          setDisplayValues(TARGET_VALUES);
        }
      };

      animFrameRef.current = requestAnimationFrame(animate);
    }, SPIN_DURATION);

    return () => {
      clearInterval(spinInterval);
      clearTimeout(settleTimeout);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const STATS = [
    { top: "Years of", value: displayValues[0], suffix: "+", bottom: "Experience" },
    { top: "Projects", value: displayValues[1], suffix: "+", bottom: "Completed" },
    { top: "Website Visitors", value: isSpinning ? displayValues[2] : monthlyVisitors, type: "month" },
    { top: "Website Visitors", value: isSpinning ? displayValues[3] : yearlyVisitors, type: "year" },
  ];

  return (
    <section className="home-container">
      <div className="home-content">
        <div className="counter-row">
          {STATS.map((item, index) => (
            <div className="counter-card" key={index}>
              <span className="counter-top">{item.top}</span>

              <div className={`flip-number${isSpinning ? " spinning" : ""}`}>
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
                      onChange={(e) => {
                        const newYear = Number(e.target.value);
                        setSelectedYear(newYear);
                        const newAvailable = Object.keys(visitorData[newYear] || {}).map(Number);
                        setSelectedMonthIndex(newAvailable[newAvailable.length - 1] ?? 0);
                      }}
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
