import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ details }) => {
  const content = (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">{details.date}</div>
      <div className="company">{details.company}</div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return details.link ? (
    <a href={details.link} target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
      {content}
    </a>
  ) : (
    content
  );
};

export default ExperienceCard;
