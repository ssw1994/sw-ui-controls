import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { forwardRef, useEffect, useMemo, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "../styles.scss";
export const Counter = forwardRef((props, ref) => {
  const [counter, updateCounter] = useState("");
  const { min, max } = props;

  const isAtMax = useMemo(() => {
    return counter === max;
  }, [max, counter]);

  const isAtMin = useMemo(() => {
    return counter === min;
  }, [min, counter]);

  const increment = () => {
    if (isAtMax) return;
    updateCounter(counter + 1);
  };
  const decrement = () => {
    if (isAtMin) return;
    updateCounter(counter - 1);
  };

  useEffect(() => {
    updateCounter(props?.value);
  }, []);

  useEffect(() => {
    props?.onCountChange(counter);
  }, [counter]);

  return (
    <div className="sw-counter flex-row center-items">
      <Button onClick={decrement} disabled={isAtMin}>
        <FontAwesomeIcon icon={faMinus} />
      </Button>
      <Input
        ref={ref}
        type="number"
        value={counter}
        onChange={(e) => updateCounter(e.target.value)}
        style={{ textAlign: "center", width: "50px" }}
        min={min}
        max={max}
      />
      <Button onClick={increment} disabled={isAtMax}>
        <FontAwesomeIcon icon={faAdd} />
      </Button>
    </div>
  );
});
