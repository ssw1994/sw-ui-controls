import React, { createRef, forwardRef, useEffect, useState } from "react";
import InputStyle from "./Input.module.css";
import validator from "./useValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
export const Input = forwardRef((props, ref) => {
  if (!ref) {
    ref = createRef();
  }
  const { label, ...otherprops } = props;
  const errors = validator(otherprops);
  const error = Object.keys(errors).find((key) => !!errors[key]);
  const [isTouched, markAsTouched] = useState(false);
  const [showPassword, togglePassword] = useState(false);
  useEffect(() => {
    if (ref && ref.current) {
      const handleKeyDown = () => {
        markAsTouched(true);
        ref.current?.removeEventListener("keydown", handleKeyDown);
      };
      ref?.current?.addEventListener("keydown", handleKeyDown);
    }
  }, [ref]);
  return (
    <div
      className={`${InputStyle.sw_input_control} ${
        error && isTouched ? error + "_error error" : ""
      }`}
    >
      <label>{label}</label>

      <div style={{ position: "relative" }}>
        {otherprops?.type !== "password" && otherprops.type !== "textarea" && (
          <input {...otherprops} ref={ref} />
        )}
        {otherprops?.type === "textarea" && (
          <textarea {...otherprops} ref={ref} />
        )}
        {otherprops?.type === "password" && (
          <input
            {...otherprops}
            type={showPassword ? "text" : "password"}
            ref={ref}
          ></input>
        )}
        {otherprops?.type === "password" &&
          (showPassword ? (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className={InputStyle.pass_icon}
              onClick={() => togglePassword(!showPassword)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className={InputStyle.pass_icon}
              onClick={() => togglePassword(!showPassword)}
            />
          ))}
      </div>
      {error && isTouched && (
        <p className="error control-error">Error : {error}</p>
      )}
    </div>
  );
});
