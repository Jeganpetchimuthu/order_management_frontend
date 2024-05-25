import React, { useState } from "react";

import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateOrder() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState({
    product: " ",
    customer: " ",
    date: " ",
    amount: " ",
    address: " ",
    paymentMethods: " ",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://ordermanagement-backend-vqfp.vercel.app/api/order/${id}`,
        order
      );
      console.log(res.data);
      navigate("/orderList");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <DashBoard />
      <div className="orderAdds">
        <h2 className="orderAdd">
          Add New Order{" "}
          <Link className="orderBack" to={"/orderList"}>
            <span>Back</span>
          </Link>
        </h2>
      </div>
      <form className="orderdetails" onSubmit={handleSubmit}>
        <label className="orderLab">
          Product
          <br />
          <input
            className="orderinput"
            type="text"
            placeholder="Ex:product Name"
            name="product"
            value={order.product}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="blackline"></div>
        <label className="orderemail">
          Customer
          <br />
          <input
            className="orderemailinput"
            type="text"
            placeholder="Ex: Customer Name"
            name="customer"
            value={order.customer}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="orderemail">
          Date
          <br />
          <input
            className="orderemailinput"
            type="text"
            placeholder="Ex: 2023-05-20"
            name="date"
            value={order.date}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="orderLab">
          Amount
          <br />
          <input
            className="orderemailinput"
            type="number"
            placeholder="Ex: 1000"
            name="amount"
            value={order.amount}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="orderLab">
          Address
          <br />
          <input
            className="orderinput"
            type="text"
            placeholder="Ex:madurai"
            name="address"
            value={order.address}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="orderpayment">
          Payment Method
          <br />
          <select
            className="orderpaymentinput"
            name="paymentMethods"
            s
            value={order.paymentMethods}
            onChange={handleChange}
          >
            <option value="">--Select Payments--</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
            <option value="g_pay">G-Pay Delivery</option>
          </select>
        </label>
        <div className="blackline"></div>
        <br />
        <button className="orderAddbtn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdateOrder;
