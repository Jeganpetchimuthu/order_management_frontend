import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style-Components/RecentOrder.css";
import { Link } from "react-router-dom";
function OrderRecent() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("https://ordermanagement-backend-vqfp.vercel.app/api/order")
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="recentOrder_list-wrap">
      <div className=" orderRecentList-wrap">
        <h3 className="cusList">
          Order List{" "}
          <Link className="cusLisSpan" to={"/addOrder"}>
            <span>Add</span>
          </Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="trOrderRecentContainer">
            <td>Product</td>
            <td>Customer</td>
            <td>Date</td>
            <td>Amount </td>
            <td>Address</td>
            <td>Payment Methods</td>
          </tr>
          {orders.map((order) => {
            return (
              <tr key={order._id} className="tdOrderRecentContainer">
                <td className="orderListProduct-td">{order.product}</td>
                <td className="orderListCus-td">{order.customer}</td>
                <td className="orderListDate-td">{order.date}</td>
                <td className="orderListAmt-td">{order.amount}</td>
                <td className="orderListAdd-td">{order.address}</td>
                <td className="orderListPm-th">{order.paymentMethods}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderRecent;
