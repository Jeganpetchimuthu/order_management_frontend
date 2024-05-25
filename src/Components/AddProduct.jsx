import React, { useState } from "react";
import "../Style-Components/AddProduct.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";
function AddProduct() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    product: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://ordermanagement-backend-vqfp.vercel.app/api/product",
        product
      );
      console.log(product);
      console.log(res);
      navigate("/productList");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <DashBoard />
      <div className="productAddl-wrap">
        <h2 className="cusAddl">
          Add New Product{" "}
          <Link className="cusBackl" to={"/productList"}>
            <span>Back</span>
          </Link>
        </h2>
      </div>
      <form className="productDetails" onSubmit={handleSubmit}>
        <label className="cusLabl">
          Product
          <br />
          <input
            className="cusinputl"
            type="text"
            name="product"
            placeholder="Ex:Mac Book"
            value={product.product}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <div className="blackline"></div>
        <label className="cusemailp">
          Brand
          <br />
          <input
            className="cusemailinputp"
            type="text"
            name="brand"
            placeholder="Ex:Apple"
            value={product.brand}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br></br>
        <label className="cusemaill">
          Category
          <br />
          <input
            className="cusemailinputl"
            type="text"
            name="category"
            placeholder="Ex:laptop"
            value={product.category}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusLabl">
          Price
          <br />
          <input
            className="cusinputl"
            type="number"
            name="price"
            placeholder="Ex:999"
            value={product.price}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <br />
        <label className="cusLabl">
          Stock
          <br />
          <input
            className="cusinputl"
            type="number"
            name="stock"
            placeholder="Ex:50 (Stock in Nos)"
            value={product.stock}
            onChange={handleChange}
          />
        </label>
        <div className="blackline"></div>
        <button className="cusAddbtnl">Add</button>
      </form>
    </div>
  );
}

export default AddProduct;
