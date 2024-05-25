import React, { useState } from "react";
import axios from "axios";
import "../Style-Components/AddCustomer.css";
import DashBoard from "./DashBoard";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdateCustomer() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    customerName: "",
    email: "",
    address: "",
    mobileNumber: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://ordermanagement-backend-vqfp.vercel.app/api/customer/${id}`,
        customer
      );
      console.log(res.data);
      navigate("/customerList");
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
      <div className="customerAdd">
        <h2 className="cusAdd">
          Add New Customer{" "}
          <Link className="cusBack" to={"/customerList"}>
            <span>Back</span>
          </Link>
        </h2>
      </div>
      <form className="cusdetails" onSubmit={handleSubmit}>
        <label className="cusLab">
          Customer Name
          <br />
          <input
            className="cusinput"
            name="customerName"
            type="text"
            placeholder="Ex:Jhon"
            value={customer.customerName}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="blackline"></div>
        <label className="cusemail">
          Email
          <br />
          <input
            className="cusemailinput"
            type="text"
            name="email"
            placeholder="Ex:jhon@gmail.com"
            value={customer.email}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusemail">
          Address
          <br />
          <input
            className="cusemailinput"
            type="text"
            name="address"
            placeholder="Ex:Madurai"
            value={customer.address}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusLab">
          Mobile Number
          <br />
          <input
            className="cusinput"
            type="number"
            name="mobileNumber"
            placeholder="Ex:9769593921"
            value={customer.mobileNumber}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusemail">
          Status
          <br />
          <select
            className="cusemailinput"
            name="status" // Added name attribute
            value={customer.status}
            onChange={handleChange}
          >
            <option value="">--Select Status--</option>
            <option value="Active">Active</option>
            <option value="Passive">Passive</option>
          </select>
        </label>
        <div className="blackline"></div>
        <button className="cusAddbtn" type="submit">
          Update
        </button>{" "}
      </form>
    </div>
  );
}

export default UpdateCustomer;
