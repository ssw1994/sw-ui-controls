import React, { useMemo, useState } from "react";

class Slide {
  slideNumber;
  contents;

  constructor(slideNumber, contents) {
    this.slideNumber = slideNumber;
    this.contents = contents;
  }
}

export default function useCaraousel(props) {
  const [activeSlide, updateActiveSlide] = useState(null);

  const slides = useMemo(() => {
    const s = [];
    React.Children.forEach(props.children, (child, index) => {
      s.push(new Slide(index, child));
    });
    updateActiveSlide(
      s.find(
        (sl) =>
          activeSlide?.slideNumber === sl.slideNumber || sl.slideNumber === 0
      )
    );
    return s;
  }, []);

  const nextSlide = () => {
    if (activeSlide.slideNumber === slides.length - 1) return;
    const active = slides.find(
      (slide) => slide.slideNumber === activeSlide.slideNumber + 1
    );
    if (active) {
      updateActiveSlide(active);
    }
  };
  const prevSlide = () => {
    if (activeSlide.slideNumber === 0) return;
    const active = slides.find(
      (slide) => slide.slideNumber === activeSlide.slideNumber - 1
    );
    if (active) {
      updateActiveSlide(active);
    }
  };

  const gotoSlide = (slide) => {
    if (slide) {
      updateActiveSlide(slide);
    }
  };
  return {
    ...props,
    activeSlide,
    slides,
    nextSlide,
    prevSlide,
    gotoSlide,
    isLastSlide: activeSlide?.slideNumber === slides?.length - 1,
    isFirstSlide: activeSlide?.slideNumber === 0,
  };
}
