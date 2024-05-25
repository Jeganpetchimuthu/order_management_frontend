import React from "react";
import "../Style-Components/Header.css";
//import HomeImage from "./HomeImage";
import SideBar from "./SideBar";
import Content from "./Content";
import Chart from "./Chart";
//import OrderList from "./OrderList";
import { Link } from "react-router-dom";
import OrderRecent from "./OrderRecent";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  return (
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
      <Content />
      <OrderRecent />
    </div>
  );
}
