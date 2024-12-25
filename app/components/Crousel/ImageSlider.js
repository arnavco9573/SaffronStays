"use client";
import React, { useState } from "react";
import { CiCircleChevLeft } from "react-icons/ci";
import { CiCircleChevRight } from "react-icons/ci";
import { GiPlainCircle } from "react-icons/gi";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="main">
      <div onClick={goToPrevious}>
        <CiCircleChevLeft className="direction-icons left" />
      </div>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="slide-styles"
      >
        <div className="slider-heading">
          <h2>Sea La Vie</h2>
          <p>Alibaug, Maharashtra</p>
        </div>
      </div>
      <div onClick={goToNext}>
        <CiCircleChevRight className="direction-icons right" />
      </div>
      <div className="circle-container">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => setCurrentIndex(slideIndex)}
            className={currentIndex === slideIndex ? "active" : ""}
          >
            <GiPlainCircle />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
