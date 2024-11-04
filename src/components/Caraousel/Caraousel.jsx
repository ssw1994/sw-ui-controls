import { forwardRef } from "react";
import useCaraousel from "./useCaraousel";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import CaraouselStyle from "./Caraousel.module.css";
export const Caraousel = forwardRef((props, ref) => {
  const updatedProps = useCaraousel(props);
  const {
    slides,
    activeSlide,
    prevSlide,
    nextSlide,
    isFirstSlide,
    isLastSlide,
    gotoSlide,
  } = updatedProps;
  return (
    <div className={`${CaraouselStyle.sw_caraousel} flex-row center-items`}>
      <Button onClick={prevSlide} disabled={isFirstSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      {slides.map((slide) => {
        return (
          <div
            className={CaraouselStyle.sw_slide}
            hidden={slide.slideNumber !== activeSlide?.slideNumber}
            key={slide.slideNumber}
          >
            {slide.contents}
          </div>
        );
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
      <Button onClick={nextSlide} disabled={isLastSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </div>
  );
});
