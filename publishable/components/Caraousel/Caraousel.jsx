import { forwardRef } from "react";
import useCaraousel from "./useCaraousel";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faCircleDot,
} from "@fortawesome/free-solid-svg-icons";
import "./Caraousel.scss";
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
    <div className="sw-caraousel flex-row center-items">
      <Button onClick={prevSlide} disabled={isFirstSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      {slides.map((slide) => {
        return (
          <div
            className="sw-slide"
            hidden={slide.slideNumber !== activeSlide?.slideNumber}
            key={slide.slideNumber}
          >
            {slide.contents}
          </div>
        );
      })}
      <div className="sw-caraousel-item">
        {slides.map((slide) => {
          return (
            <Button
              onClick={() => gotoSlide(slide)}
              className={
                slide.slideNumber !== activeSlide?.slideNumber
                  ? "sw-carausel-item-active"
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
