import React from "react";
import "../Style-Components/SideBar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StoreIcon from "@mui/icons-material/Store";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GradingIcon from "@mui/icons-material/Grading";
import { Link } from "react-router-dom";
export default function SideBar() {
  return (
    <div className="sidebar-containers">
      <h3 className="MainDashBord">MAIN</h3>
      <h4 className="dashboard-col">
        {" "}
        <span>
          <DashboardIcon className="dashboardIcon" />
        </span>
        DashBoard
      </h4>
      <h4 className="listDashBord">LIST</h4>
      <Link className="cus-contents" to={"/customer"}>
        <h5 className="dashboard-col">
          <span>
            <AccountBalanceIcon className="customerIcon" />
          </span>{" "}
          Customer
        </h5>{" "}
      </Link>
      <Link className="cus-contents" to={"/product"}>
        <h5 className="dashboard-col">
          <span>
            <ProductionQuantityLimitsIcon className="productIcon" />
          </span>{" "}
          Product
        </h5>
      </Link>
      <Link className="ord-contents" to={"/order"}>
        <h5 className="dashboard-col">
          <span>
            <GradingIcon className="qualityIcon" />
          </span>{" "}
          Quality
        </h5>
      </Link>
      <Link className="stcok-contents" to={"/stock"}>
        <h5 className="dashboard-col">
          <span>
            <StoreIcon className="stockIcon" />
          </span>{" "}
          Stock
        </h5>
      </Link>
      <div className="divSec"></div>
    </div>
  );
}
