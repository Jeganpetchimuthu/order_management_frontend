import React, { useState, useEffect } from "react";
import "../Style-Components/OrderList.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://ordermanagement-backend-vqfp.vercel.app/api/order")
      .then((response) => setOrders(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteOrder = async (id) => {
    try {
      await axios.delete(
        `https://ordermanagement-backend-vqfp.vercel.app/api/order/${id}`
      );
      setOrders(orders.filter((order) => order._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (order) => {
    navigate(`/updateOrder/${order}`);
  };
  return (
    <div className="order-flex-wrap">
      <DashBoard />
      <div className="order-List">
        <h3 className="cusList">
          Order List{" "}
          <Link className="cusLisSpan" to={"/addOrder"}>
            <span>Add</span>
          </Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="trOrderContainer">
            <td>Product</td>
            <td>Customer</td>
            <td>Date</td>
            <td>Amount</td>
            <td>Address</td>
            <td>Payment Methods</td>
            <td className="action-th">Action</td>
          </tr>
          {orders.map((order) => {
            return (
              <tr key={order._id} className="tdOrderContainer">
                <td>{order.product}</td>
                <td>{order.customer}</td>
                <td>{order.date}</td>
                <td>{order.amount}</td>
                <td>{order.address}</td>
                <td className="actionPM-th">{order.paymentMethods}</td>
                <td>
                  <button
                    className="product-delete-btn"
                    onClick={() => deleteOrder(order._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="product-edit-btn"
                    onClick={() => handleEdit(order._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderList;
