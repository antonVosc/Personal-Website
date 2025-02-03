import React, { useRef } from "react";
import "./Education.css";
import { EDUCATION } from "../../utils/data";
import EducationCard from "./EducationCard/EducationCard";
import Slider from "react-slick";

const Education = () => {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="education-container">
      <h5>Education</h5>

      <div className="education-content">
        <Slider ref={ sliderRef } { ...settings }>
          { EDUCATION.map((item) => (<EducationCard key={ item.title } details={ item } />)) }
        </Slider>
      </div>
    </section>
  );
};

export default Education;