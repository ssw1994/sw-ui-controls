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
  const { min } = props;
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
    if (activeSlide.slideNumber === slides.length - 1 && !min) return;
    const active = slides.find(
      (slide) =>
        (activeSlide.slideNumber + 1) % slides.length === slide.slideNumber
    );
    if (active) {
      updateActiveSlide(active);
    }
  };
  const prevSlide = () => {
    if (activeSlide.slideNumber === 0 && !min) return;
    const active = slides.find(
      (slide) =>
        (activeSlide.slideNumber - 1) % slides.length === slide.slideNumber
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

  const slideRange = useMemo(() => {
    const slidesLength = slides.length;
    const range = [];
    let count = min ? min : 1;
    for (let i = 0; i <= slidesLength; i++) {
      if (i === activeSlide?.slideNumber) {
        const sl = slides[i];
        while (count) {
          const n = i % slidesLength;
          const sn = slides[n]?.slideNumber;
          range.push(sn);
          count--;
          i++;
        }
      }
    }
    console.log(range);
    return range;
  }, [activeSlide, slides, min]);
  return {
    ...props,
    activeSlide,
    slides,
    nextSlide,
    prevSlide,
    gotoSlide,
    slideRange,
    isLastSlide: activeSlide?.slideNumber === slides?.length - 1,
    isFirstSlide: activeSlide?.slideNumber === 0,
  };
}
