import React from "react";
import "../Style-Components/Content.css";
import { Link } from "react-router-dom";
import StoreIcon from "@mui/icons-material/Store";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import GradingIcon from "@mui/icons-material/Grading";

function AdminContent() {
  return (
    <div className="content-container">
      <div className="product-items">
        <h3 className="customer-info">CUSTOMER</h3>
        <Link className="cus-content">
          <span>
            View all the Customer{" "}
            <span>
              <AccountBalanceIcon className="contentIcon-mi" />{" "}
            </span>{" "}
          </span>
        </Link>
      </div>
      <div className="sales-items">
        <h3 className="product-info">PRODUCT</h3>
        <Link className="pro-content">
          {" "}
          <span>
            View all the Product{" "}
            <span>
              <ProductionQuantityLimitsIcon className="contentProductIcon-mi" />{" "}
            </span>{" "}
          </span>
        </Link>
      </div>
      <div className="quality-items">
        <h3 className="order-info">
          ORDER
          <Link className="ord-content">
            {" "}
            <span>
              View all the Order{" "}
              <span>
                <StoreIcon className="contentOrderIcon-mi" />{" "}
              </span>{" "}
            </span>
          </Link>{" "}
        </h3>
      </div>
      <div className="stock-items">
        <h3 className="stock-info">
          STOCK{" "}
          <Link className="stcok-content">
            {" "}
            <span>
              View all the Stock{" "}
              <span>
                <GradingIcon className="contentStockIcon-mi" />{" "}
              </span>{" "}
            </span>
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default AdminContent;
