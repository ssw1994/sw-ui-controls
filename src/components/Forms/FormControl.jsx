import React, {
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { Input } from "../Input/Input";
import { FormContext } from "./FormGroup";
import { Select } from "../Select/Select";
import { HtmlEditor } from "../HtmlEditor/HtmlEditor";
import { StarRating } from "../StarRating/StarRating";
import { FileUploader } from "../FileUploader/FileUploader";

export const FormControl = forwardRef((props, ref) => {
  const [value, updateValue] = useState(props.value);
  if (!ref) {
    ref = createRef();
  }

  const { updateForm } = useContext(FormContext);
  const { type, defaultValue } = props;
  const inputTypes = [
    "email",
    "text",
    "search",
    "radio",
    "checkbox",
    "password",
    "date",
    "year",
    "month",
    "textarea",
  ];

  useEffect(() => {
    updateForm(props, value);
  }, []);

  useEffect(() => {
    updateForm(props, value);
  }, [props, value]);

  // useEffect(() => {
  //   if (defaultValue) {
  //     updateValue(defaultValue);
  //   }
  // }, [defaultValue]);

  if (type === "select") {
    return (
      <Select
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    );
  }

  if (type === "file") {
    return <FileUploader {...props} uploadedFiles={(e) => updateValue(e)} />;
  }

  if (["editor", "html"].includes(type)) {
    return <HtmlEditor getContents={updateValue} {...props} />;
  }

  if (["rating", "rate"].includes(type)) {
    return <StarRating rating={value} setRating={updateValue} {...props} />;
  }

  if (inputTypes.includes(type)) {
    return (
      <Input
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    );
  }
  return <h1>Invalid type</h1>;
});
