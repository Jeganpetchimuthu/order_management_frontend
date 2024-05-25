import React from "react";
import "../Style-Components/Header.css";

import SideBar from "./SideBar";

import Chart from "./Chart";

import { Link } from "react-router-dom";
import OrderRecent from "./OrderRecent";
import SearchIcon from "@mui/icons-material/Search";
import AdminContent from "./AdminContent";

function Admin() {
  return (
    <div>
      <div className="Header-components">
        <h3 className="ordermgmt">Orderhive</h3>
        <div className="Header-Name">
          <Link to={"/admin"} className="header_loginbtn">
            <h3>Admin</h3>
          </Link>

          <Link to={"/user"} className="header_loginbtn">
            <h3>Users</h3>
          </Link>
          <Link to={"/register"} className="header_loginbtn">
            {" "}
            <h3>Logout</h3>
          </Link>
        </div>

        <div>
          <input className="search" type="text" placeholder="Search" />
          <span>
            <SearchIcon className="searchinputIcon" />
          </span>
        </div>

        <SideBar />
        <Chart />
        <AdminContent />
        <OrderRecent />
      </div>
    </div>
  );
}

export default Admin;
