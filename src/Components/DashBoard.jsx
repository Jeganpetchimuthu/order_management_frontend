import React from "react";
import "../Style-Components/DashBoard.css";
import DashBoardSideBar from "./DashBoardSideBar";
import { Link } from "react-router-dom";
function DashBoard() {
  return (
    <div className="dashboard-wrap">
      <div className="Header-components-wrap">
        <h3 className="ordermgmt">Order Managements</h3>
        <div className="Header-Name">
          <Link to={"/admin"} className="header_loginbtn">
            <h3>Admin</h3>
          </Link>
          <Link to={"/user"} className="header_loginbtn">
            <h3>Users</h3>
          </Link>
          <Link to={"/register"} className="header_loginbtn">
            <h3>Logout</h3>
          </Link>
        </div>
        <DashBoardSideBar />
      </div>
    </div>
  );
}

export default DashBoard;
