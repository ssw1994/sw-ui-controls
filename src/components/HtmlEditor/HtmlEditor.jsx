import React, { createRef, forwardRef, useEffect, useState } from "react";
import HtmlEditorStyle from "./HtmlEditor.module.css";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAlignCenter,
  faAlignLeft,
  faAlignRight,
  faBold,
  faBrush,
  faItalic,
  faLink,
  faList,
  faList12,
  faUnderline,
  faUnlink,
} from "@fortawesome/free-solid-svg-icons";
export const HtmlEditor = forwardRef((props, ref) => {
  const { getContents, ...otherProps } = props;
  const { label, value } = otherProps;
  if (!ref) {
    ref = createRef();
  }

  useEffect(() => {
    if (value) {
      ref.current.innerHTML = value;
    }
  }, [value]);

  const [content, setContent] = useState();

  const handleInputChange = (e) => {
    setContent(e?.currentTarget?.innerHTML);
  };

  useEffect(() => {
    if (getContents && typeof getContents === "function") {
      getContents(content);
    }
  }, [content]);

  const handleCommand = (command, value = null) => {
    document.execCommand(command, false, value);
    setContent(ref.current.innerHTML);
  };

  return (
    <>
      <label className={HtmlEditorStyle.sw_html_editor_label}>{label}</label>
      <div className={HtmlEditorStyle.sw_html_editor} {...otherProps}>
        <div className={HtmlEditorStyle.toolbar}>
          <Button onClick={() => handleCommand("bold")} type="button">
            <FontAwesomeIcon icon={faBold} />
          </Button>
          <Button onClick={() => handleCommand("italic")} type="button">
            <FontAwesomeIcon icon={faItalic} />
          </Button>
          <Button onClick={() => handleCommand("underline")} type="button">
            <FontAwesomeIcon icon={faUnderline} />
          </Button>
          <Button
            onClick={() => handleCommand("insertOrderedList")}
            type="button"
          >
            <FontAwesomeIcon icon={faList12} />
          </Button>
          <Button
            onClick={() => handleCommand("insertUnorderedList")}
            type="button"
          >
            <FontAwesomeIcon icon={faList} />
          </Button>
          <Button onClick={() => handleCommand("justifyLeft")} type="button">
            <FontAwesomeIcon icon={faAlignLeft} />
          </Button>
          <Button onClick={() => handleCommand("justifyCenter")} type="button">
            <FontAwesomeIcon icon={faAlignCenter} />
          </Button>
          <Button onClick={() => handleCommand("justifyRight")} type="button">
            <FontAwesomeIcon icon={faAlignRight} />
          </Button>
          <Button
            onClick={() => handleCommand("foreColor", "red")}
            type="button"
          >
            <FontAwesomeIcon icon={faBrush} />
          </Button>
          <Button
            onClick={() =>
              handleCommand("createLink", prompt("Enter the URL:"))
            }
            type="button"
          >
            <FontAwesomeIcon icon={faLink} />
          </Button>
          <Button onClick={() => handleCommand("unlink")} type="button">
            <FontAwesomeIcon icon={faUnlink} />
          </Button>
        </div>
        <div className={HtmlEditorStyle.window}>
          <div
            className={HtmlEditorStyle.editor}
            ref={ref}
            contentEditable
            onInput={handleInputChange}
          ></div>
          {/* <div className={HtmlEditorStyle.preview}>
          <pre>{content}</pre>
        </div> */}
        </div>
      </div>
    </>
  );
});
