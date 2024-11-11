import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createContext, useContext, useState } from "react";
import { Button } from "../Button/Button";
import ExpansionPanelStyle from "./ExpansionPanel.module.css";
import { Card, CardBody, CardHeader } from "../Card";
import React from "react";
const PanelContext = createContext();
export const Header = (props) => {
  const { children } = props;
  const { open, setOpen } = useContext(PanelContext);
  return (
    <CardHeader className={ExpansionPanelStyle.sw_expansion_panel_header}>
      <div>{children}</div>
      <div>
        <Button onClick={() => setOpen(!open)} title={open ? "Close" : "Open"}>
          <FontAwesomeIcon icon={open ? faAngleUp : faAngleDown} />
        </Button>
      </div>
    </CardHeader>
  );
};
export const Body = (props) => {
  const { children } = props;
  const { open } = useContext(PanelContext);
  return (
    <CardBody
      className={ExpansionPanelStyle.sw_expansion_panel_body}
      hidden={!open}
    >
      {children}
    </CardBody>
  );
};
export const ExpansionPanel = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(true);
  return (
    <PanelContext.Provider value={{ open, setOpen }}>
      <Card className={ExpansionPanelStyle.sw_expasion_panel}>{children}</Card>
    </PanelContext.Provider>
  );
};
