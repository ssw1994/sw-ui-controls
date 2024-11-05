import { faStar, faStarAndCrescent } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import RatingStyle from "./StarRating.module.css";
export const StarRating = (props) => {
  const { setRating, rating, min, max } = props;
  const numberOfStars = useMemo(() => {
    const stars = [];
    for (let i = min; i <= max; i++) {
      stars.push(i);
    }
    return stars;
  }, [min, max]);

  const updateRating = (rate) => {
    if (setRating && typeof setRating === "function") {
      setRating(rate);
    }
  };
  return (
    <div className={RatingStyle.sw_star_rating}>
      {numberOfStars.map((star, index) => {
        return (
          <>
            <FontAwesomeIcon
              icon={faStar}
              onClick={() => updateRating(star)}
              className={star <= rating ? RatingStyle.completed : ""}
              title={"" + star}
            />
            &nbsp;
          </>
        );
      })}
    </div>
  );
};
