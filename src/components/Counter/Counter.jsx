import { faAdd, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { memo, forwardRef, useEffect, useMemo, useState } from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
export const Counter = memo(
  forwardRef((props, ref) => {
    const { min, max } = props;

    const isAtMax = useMemo(() => {
      return props?.value === max;
    }, [max, props?.value]);

    const isAtMin = useMemo(() => {
      return props?.value === min;
    }, [min, props?.value]);

    const increment = () => {
      if (isAtMax) return;
      props?.onCountChange(props?.value + 1);
    };
    const decrement = () => {
      if (isAtMin) return;
      props?.onCountChange(props?.value - 1);
    };

    return (
      <div className="sw-counter flex-row center-items">
        <Button onClick={decrement} disabled={isAtMin}>
          <FontAwesomeIcon icon={faMinus} />
        </Button>
        <Input
          ref={ref}
          type="number"
          value={props.value}
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
  })
);
