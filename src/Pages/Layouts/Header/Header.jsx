import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import HeaderStyle from "./Header.module.css";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const contents = document.querySelector(".sw-contents");
    contents.classList.add(
      isOpen ? "contents-with-menu-open" : "contents-with-menu-close"
    );
    contents.classList.remove(
      !isOpen ? "contents-with-menu-open" : "contents-with-menu-close"
    );
  }, [isOpen]);

  return (
    <div className={HeaderStyle.sw_header_bar}>
      {isOpen && (
        <div
          className={`sidebar ${isOpen ? "open" : "closed"}`}
          style={{
            width: 200,
            height: "100vh",
            transition: "width 0.5s ease-in-out",
            display: isOpen ? "block" : "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SideBar />
        </div>
      )}
      <button className={HeaderStyle.sw_menu_button} onClick={toggleOpen}>
        <FontAwesomeIcon icon={isOpen ? faClose : faBars} />
      </button>
      <div>
        <h3>SW UI CONTROLS</h3>
      </div>
    </div>
  );
}
