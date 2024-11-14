import { forwardRef } from "react";
import HtmlEditorStyle from "./HtmlEditor.module.css";
export const HtmlEditor = forwardRef((props, ref) => {
  return <div className={HtmlEditorStyle.sw_html_editor}></div>;
});
