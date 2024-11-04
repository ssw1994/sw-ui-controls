import { forwardRef, useId } from "react";
import CheckBoxStyle from "./CheckBox.module.css";
export const CheckBox = forwardRef((props, ref) => {
  const { label, ...otherprops } = props;
  const id = useId();
  return (
    <div className={CheckBoxStyle.sw_checkbox}>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" {...otherprops} ref={ref} id={id} />
    </div>
  );
});
