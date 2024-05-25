import React, { useState } from "react";
import "../Style-Components/AddStock.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useParams, useNavigate } from "react-router-dom";

function UpdatesStock() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [stocks, setStocks] = useState({
    product: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStocks({ ...stocks, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `https://ordermanagement-backend-vqfp.vercel.app/api/stockItem/${id}`,
        stocks
      );
      console.log(res.data);
      navigate("/stockList");
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
            name="product" // Added name attribute
            placeholder="Ex: Product Name"
            value={stocks.product}
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
            name="brand" // Added name attribute
            placeholder="Ex: Brand Name"
            value={stocks.brand}
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
            name="category" // Added name attribute
            placeholder="Ex: Category Name"
            value={stocks.category}
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
            value={stocks.price}
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
            value={stocks.stock}
            onChange={handleChange}
          >
            <option>--Select Status--</option>
            <option>Active</option>
            <option>Passive</option>
          </select>
        </label>
        <div className="blackline"></div>
        <button className="cusAddbtn" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default UpdatesStock;
