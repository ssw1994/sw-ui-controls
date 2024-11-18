import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "./Header.module.css";
export default function Header({ toggleOpen, isOpen }) {
  return (
    <div className={HeaderStyle.sw_header_bar}>
      <button className={HeaderStyle.sw_menu_button} onClick={toggleOpen}>
        <FontAwesomeIcon icon={isOpen ? faClose : faBars} />
      </button>
      <div>
        <h3>SW UI CONTROLS</h3>
      </div>
    </div>
  );
}
