import { createContext, forwardRef, useContext } from "react";
import CardStyle from "./Card.module.css";
export const Card = forwardRef((props, ref) => {
  return (
    <div className={CardStyle.sw_card} ref={ref} {...props}>
      {props.children}
    </div>
  );
});
export function CardBody(props) {
  return (
    <div className={CardStyle.sw_card_body} {...props}>
      {props.children}
    </div>
  );
}
export function CardFooter(props) {
  return (
    <div className={CardStyle.sw_card_footer} {...props}>
      {props.children}
    </div>
  );
}
export function CardHeader(props) {
  return (
    <div className={CardStyle.sw_card_header} {...props}>
      {props.children}
    </div>
  );
}

export function CardMedia(props) {
  return (
    <div className={CardStyle.sw_card_media} {...props}>
      {props.children}
    </div>
  );
}
