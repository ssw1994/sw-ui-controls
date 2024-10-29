import { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";

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
    <div className="sw-header-bar">
      {!isOpen && (
        <button className="menu_button_open" onClick={toggleOpen}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      )}
      <div
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        style={{
          width: 200,
          height: "100vh",
          transition: "width 0.5s ease-in-out",
          display: isOpen ? "block" : "none",
        }}
      >
        <SideBar />
        {isOpen && (
          <button className="menu_button_close" onClick={toggleOpen}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        )}
      </div>
    </div>
  );
}
