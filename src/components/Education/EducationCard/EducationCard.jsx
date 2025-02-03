import React from "react";
import "./EducationCard.css";

const EducationCard = ({ details }) => {
  return (
    <div className="education-card">
      <h6>{ details.name }</h6>
      <div className="duration">{ details.date }</div>
      <div className="course">{ details.course }</div>
    </div>
  );
};

export default EducationCard;