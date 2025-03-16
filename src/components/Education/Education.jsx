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
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 4000,
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

  const slideLeft = () => {
    sliderRef.current.slickPause();
    sliderRef.current.slickPrev();
    sliderRef.current.slickPlay();
  };

  const slideRight = () => {
    sliderRef.current.slickPause();
    sliderRef.current.slickNext();
    sliderRef.current.slickPlay();
  };

  return (
    <section className="education-container">
      <h5>Education</h5>

      <div className="education-content">
        <div className="arrow-right" onClick={ slideRight }>
          <span className="material-symbols-outlined">chevron_right</span>
        </div>

        <div className="arrow-left" onClick={ slideLeft }>
          <span className="material-symbols-outlined">chevron_left</span>
        </div>

        <Slider ref={ sliderRef } { ...settings }>
          { EDUCATION.map((item) => (<EducationCard key={ item.title } details={ item } />)) }
        </Slider>
      </div>
    </section>
  );
};

export default Education;