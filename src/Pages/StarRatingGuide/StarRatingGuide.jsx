import { useState } from "react";
import { StarRating } from "../../components/StarRating/StarRating";
import { Tabs, Tab } from "../../components/Tabs";

export default function StarRatingGuide() {
  const [currentRating, updateRating] = useState(1);
  const setRating = (rating) => {
    updateRating(rating);
  };
  return (
    <div>
      <h1>Star Rating Guide</h1>
      <Tabs>
        <Tab header="Result">
          <StarRating
            setRating={setRating}
            rating={currentRating}
            min={1}
            max={10}
          />
        </Tab>
        <Tab header="Code">
          <pre>
            <code>
              {`
                const [currentRating, updateRating] = useState(1);
                const setRating = (rating) => {
                    updateRating(rating);
                };
                <StarRating
                    setRating={setRating}
                    rating={currentRating}
                    min={1}
                    max={5}
                />
                `}
            </code>
          </pre>
        </Tab>
      </Tabs>
    </div>
  );
}
