import { Outlet } from "react-router-dom";

import NavBar from "../pages/Header/NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar />
      </div>
      <div className="max-w-7xl mx-auto">
        {" "}
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
