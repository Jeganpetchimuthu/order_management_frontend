import React, { useEffect, useState } from "react";
import "../Style-Components/AddProduct.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";

function UpdateProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [product, setProduct] = useState({
    product: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
  });

  useEffect(() => {
    if (state?.product) {
      setProduct(state.product);
    } else {
      const getProduct = async () => {
        try {
          const res = await axios.get(
            `https://ordermanagement-backend-vqfp.vercel.app/api/product/${id}`
          );
          setProduct(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      getProduct();
    }
  }, [id, state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `http://localhost:5000/api/product/${id}`,
        product
      );
      console.log(res.data);
      navigate("/productList");
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

export default UpdateProduct;
