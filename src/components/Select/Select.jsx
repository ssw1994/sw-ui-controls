import React, {
  forwardRef,
  createRef,
  useState,
  useEffect,
  Fragment,
} from "react";
import SelectStyle from "./Select.module.css";
import validator from "../Input/useValidator";
export const Select = forwardRef((props, ref) => {
  if (!ref) {
    ref = createRef();
  }
  const { label, config, ...otherprops } = props;
  const errors = validator(otherprops);
  const error = Object.keys(errors).find((key) => !!errors[key]);
  const [isTouched, markAsTouched] = useState(false);
  useEffect(() => {
    if (ref && ref.current) {
      const handleKeyDown = () => {
        markAsTouched(true);
        ref.current?.removeEventListener("keydown", handleKeyDown);
      };
      ref?.current?.addEventListener("keydown", handleKeyDown);
    }
  }, [ref]);

  const { items } = props;
  let displayName = null,
    value = null;
  if (config) {
    displayName = config.displayName;
    value = config.value;
  }

  const nullValueOption = <option value="">None</option>;

  let optionTemplate = (
    <>
      {nullValueOption}
      {props.children}
    </>
  );

  if (items && items instanceof Array && config && displayName && value) {
    optionTemplate = items.map((item) => (
      <option key={item[value]} value={item[value]}>
        {item[displayName]}
      </option>
    ));

    optionTemplate = [nullValueOption, ...optionTemplate];
  } else if (items && items instanceof Array && items.length >= 0) {
    optionTemplate = items.map((item) => (
      <option key={item} value={item}>
        {item}
      </option>
    ));
    optionTemplate = [nullValueOption, ...optionTemplate];
  }

  return (
    <div
      className={`${SelectStyle.sw_select} ${
        error && isTouched ? error + "_error error" : ""
      }`}
    >
      <label>{label}</label>

      <div style={{ position: "relative" }}>
        <select {...otherprops} ref={ref}>
          {optionTemplate}
        </select>
      </div>
      {error && isTouched && (
        <p className="error control-error">Error : {error}</p>
      )}
    </div>
  );
});
