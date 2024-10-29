import Header from "../Header/Header";
import { Outlet } from "react-router";
export default function HeadSideContentLayout() {
  return (
    <>
      <Header />
      <div className="sw-contents">
        <Outlet />
      </div>
    </>
  );
}
