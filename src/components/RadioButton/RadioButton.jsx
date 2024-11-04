import React, { forwardRef, useId } from "react";
import RadioStyle from "./RadioButton.module.css";
export const RadioButton = forwardRef((props, ref) => {
  const { label, ...otherprops } = props;
  const id = useId();
  return (
    <div className={RadioStyle.sw_radio}>
      <label htmlFor={id}>{label}</label>
      <input type="radio" {...otherprops} id={id} ref={ref} />
    </div>
  );
});
