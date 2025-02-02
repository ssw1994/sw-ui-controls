import React, { forwardRef } from "react";
import useCaraousel from "./useCaraousel";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import CaraouselStyle from "./Caraousel.module.css";
export const Caraousel = (props) => {
  const updatedProps = useCaraousel(props);
  const {
    slides,
    activeSlide,
    prevSlide,
    nextSlide,
    isFirstSlide,
    isLastSlide,
    gotoSlide,
    slideRange,
    min,
  } = updatedProps;
  console.log(slides, activeSlide);
  return (
    <div className={`${CaraouselStyle.sw_caraousel} flex-row center-items`}>
      <Button onClick={prevSlide} disabled={isFirstSlide && !min}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      {slideRange.map((sn) => {
        return slides.map((slide, index) => {
          return (
            slide.slideNumber === sn && (
              <div className={CaraouselStyle.sw_slide} key={slide.slideNumber}>
                {slide.contents}
              </div>
            )
          );
        });
      })}
      <div className={CaraouselStyle.sw_caraousel_item}>
        {slides.map((slide) => {
          return (
            <Button
              onClick={() => gotoSlide(slide)}
              className={
                slide.slideNumber !== activeSlide?.slideNumber
                  ? CaraouselStyle.sw_carausel_item_active
                  : ""
              }
            >
              <FontAwesomeIcon icon={faCircleDot} />
            </Button>
          );
        })}
      </div>
      <Button onClick={nextSlide} disabled={isLastSlide && !min}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  );
};
