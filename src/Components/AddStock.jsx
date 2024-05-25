import React, { useState } from "react";
import "../Style-Components/AddStock.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";

function AddStock() {
  const navigate = useNavigate();
  const [stock, setStock] = useState({
    product: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStock({ ...stock, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ordermanagement-backend-vqfp.vercel.app/api/stockItem",
        stock
      );
      console.log(stock);
      console.log(res);
      navigate("/stockList");
    } catch (error) {
      console.log(error);
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
      <br />
      <DashBoard />
      <div className="stocksAdd">
        <h2 className="stockAdd">
          Add New Stock{" "}
          <Link className="stockBack" to={"/stockList"}>
            {" "}
            <span>Back</span>
          </Link>
        </h2>
      </div>
      <form className="cusdetails" onSubmit={handleSubmit}>
        <label className="stockLab">
          Product
          <br />
          <input
            className="stockinput"
            type="text"
            name="product"
            placeholder="Ex: Product Name"
            value={stock.product}
            onChange={handleChange}
          />
        </label>
        <br />
        <div className="blackline"></div>
        <label className="cusemail">
          Brand
          <br />
          <input
            className="cusemailinput"
            type="text"
            name="brand"
            placeholder="Ex: Brand Name"
            value={stock.brand}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusemail">
          Category
          <br />
          <input
            className="cusemailinput"
            type="text"
            name="category"
            placeholder="Ex: Category Name"
            value={stock.category}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="stockLab">
          Price
          <br />
          <input
            className="stockinput"
            type="number"
            name="price"
            placeholder="Ex: Price"
            value={stock.price}
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
            name="stock"
            value={stock.stock}
            onChange={handleChange}
          >
            <option value="">--Select Status--</option>
            <option value="Active">Active</option>
            <option value="Passive">Passive</option>
          </select>
        </label>
        <div className="blackline"></div>
        <button className="cusAddbtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddStock;
