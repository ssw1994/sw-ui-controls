import { forwardRef } from "react";

export default function CardHeader(props) {
  return (
    <div className="sw-card-header" {...props}>
      {props.children}
    </div>
  );
}
