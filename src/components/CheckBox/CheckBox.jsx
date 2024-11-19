import React, { forwardRef, useId } from "react";
import CheckBoxStyle from "./CheckBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const CheckBox = forwardRef((props, ref) => {
  const { label, icon, ...otherprops } = props;
  let { style } = otherprops;
  if (style && icon) {
    style["display"] = "none";
    otherprops["style"] = style;
  }
  if (!style && icon) {
    style = {
      display: "none",
    };
    otherprops["style"] = style;
  }
  const id = useId();
  return (
    <div className={CheckBoxStyle.sw_checkbox}>
      <label htmlFor={id}>
        {label}
        {icon && (
          <>
            &nbsp; <FontAwesomeIcon icon={icon} />
          </>
        )}
      </label>
      <input type="checkbox" {...otherprops} ref={ref} id={id} />
    </div>
  );
});
