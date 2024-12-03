import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import { Outlet, useNavigate } from "react-router";
import SideBar from "../SideBar/SideBar";
export default function HeadSideContentLayout() {
  const navigate = useNavigate();
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

  useEffect(() => {
    navigate("/Input");
  }, []);

  return (
    <>
      <div
        className={`sidebar ${isOpen ? "open" : "closed"}`}
        style={{
          width: isOpen ? 200 : 0,
          display: isOpen ? "block" : "none",
          transition: "width 0.5s ease-in-out",
          alignItems: "center",
          position: "fixed",
          top: "100px",
          bottom: "0",
          overflow: "auto",
        }}
      >
        <SideBar />
      </div>
      <Header toggleOpen={toggleOpen} isOpen={isOpen} />
      <div className="sw-contents">
        <Outlet />
      </div>
    </>
  );
}
