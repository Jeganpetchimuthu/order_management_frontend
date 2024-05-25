import React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GradingIcon from "@mui/icons-material/Grading";
import "../Style-Components/DashBoardSideBar.css";
import { Link } from "react-router-dom";
function DashBoardSideBar() {
  return (
    <div className="dashsidebar-containers">
      <h3 className="MainDashBords">MAIN</h3>
      <Link to={"/home"} className="Ddashboard-cols">
        <h4 className="dashboardName">DashBoard</h4>
        <span>
          <DashboardIcon className="DdashboardIcons" />
        </span>
      </Link>
      <h4 className="listDashBords">LIST</h4>
      <Link className="cus-contents" to={"/customer"}>
        <h5 className="dashboardi-cols">
          <span>
            <AccountBalanceIcon className="dcustomerIcons" />
          </span>{" "}
          Customer
        </h5>
      </Link>
      <Link className="pro-contents" to="/product">
        <h5 className="dashboard-cols">
          <span>
            <ProductionQuantityLimitsIcon className="productIcons" />
          </span>{" "}
          Product
        </h5>
      </Link>
      <Link className="ord-contents" to={"/order"}>
        <h5 className="dashboard-cols">
          <span>
            <GradingIcon className="qualityIcons" />
          </span>{" "}
          Quality
        </h5>
      </Link>
      <Link className="stcok-contents" to={"/stock"}>
        <h5 className="dashboard-cols">
          <span>
            <StoreIcon className="stockIcons" />
          </span>{" "}
          Stock
        </h5>
      </Link>
    </div>
  );
}

export default DashBoardSideBar;
