import { forwardRef, memo, useEffect, useState } from "react";
import "./Input.scss";
import validator from "../../hooks/useValidator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faBars,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
export const Input = (props) => {
  const { label, ...otherprops } = props;
  const errors = validator(otherprops);
  const error = Object.keys(errors).find((key) => !!errors[key]);

  const [showPassword, togglePassword] = useState(false);

  return (
    <div className={`sw-input-control ${error ? error + "_error error" : ""}`}>
      <label>{label}</label>
      <div style={{ position: "relative" }}>
        {otherprops?.type !== "password" && <input {...otherprops} />}
        {otherprops?.type === "password" && (
          <input
            {...otherprops}
            type={showPassword ? "text" : "password"}
          ></input>
        )}
        {otherprops?.type === "password" &&
          (showPassword ? (
            <FontAwesomeIcon
              icon={faEyeSlash}
              className="pass_icon"
              onClick={() => togglePassword(!showPassword)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faEye}
              className="pass_icon"
              onClick={() => togglePassword(!showPassword)}
            />
          ))}
      </div>
      {error && <p className="error control-error">Error : {error}</p>}
    </div>
  );
};
