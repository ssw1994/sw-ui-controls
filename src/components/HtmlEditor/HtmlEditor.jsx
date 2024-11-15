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
  if (!ref) {
    ref = createRef();
  }

  const [content, setContent] = useState("<p>Edit this content</p>");

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
    <div className={HtmlEditorStyle.sw_html_editor} {...otherProps}>
      <div className={HtmlEditorStyle.toolbar}>
        <Button onClick={() => handleCommand("bold")}>
          <FontAwesomeIcon icon={faBold} />
        </Button>
        <Button onClick={() => handleCommand("italic")}>
          <FontAwesomeIcon icon={faItalic} />
        </Button>
        <Button onClick={() => handleCommand("underline")}>
          <FontAwesomeIcon icon={faUnderline} />
        </Button>
        <Button onClick={() => handleCommand("insertOrderedList")}>
          <FontAwesomeIcon icon={faList12} />
        </Button>
        <Button onClick={() => handleCommand("insertUnorderedList")}>
          <FontAwesomeIcon icon={faList} />
        </Button>
        <Button onClick={() => handleCommand("justifyLeft")}>
          <FontAwesomeIcon icon={faAlignLeft} />
        </Button>
        <Button onClick={() => handleCommand("justifyCenter")}>
          <FontAwesomeIcon icon={faAlignCenter} />
        </Button>
        <Button onClick={() => handleCommand("justifyRight")}>
          <FontAwesomeIcon icon={faAlignRight} />
        </Button>
        <Button onClick={() => handleCommand("foreColor", "red")}>
          <FontAwesomeIcon icon={faBrush} />
        </Button>
        <Button
          onClick={() => handleCommand("createLink", prompt("Enter the URL:"))}
        >
          <FontAwesomeIcon icon={faLink} />
        </Button>
        <Button onClick={() => handleCommand("unlink")}>
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
  );
});
