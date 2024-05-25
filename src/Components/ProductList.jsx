import React, { useState, useEffect } from "react";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";
import "../Style-Components/ProductList.css";
export default function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ordermanagement-backend-vqfp.vercel.app/api/product")
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/product/${id}`);
      setProducts(products.filter((stock) => stock._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (product) => {
    navigate(`/updateProduct/${product}`);
  };
  return (
    <div className="stock-flex-wrap">
      <DashBoard />
      <div className="stock-List">
        <h3 className="cusList">
          Product List{" "}
          <Link className="cusLisSpan" to={"/AddProduct"}>
            <span>Add</span>
          </Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="trProductContainer">
            <th className="product-th">Product</th>
            <th className="brand-th">Brand</th>
            <th className="category-th">Category</th>
            <th className="price-th">Price</th>
            <th className="stock-th">Stock</th>
            <th className="action-th">Action</th>
          </tr>
          {products.map((product) => {
            return (
              <tr key={product._id} className="tdStockContainer">
                <td className="product-td">{product.product}</td>
                <td className="brand-td">{product.brand}</td>
                <td className="category-t">{product.category}</td>
                <td className="price-td">{product.price}</td>
                <td className="stock-td">{product.stock}</td>
                <td>
                  <button
                    className="product-delete-btn"
                    onClick={() => deleteProduct(product._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="product-edit-btn"
                    onClick={() => handleEdit(product._id)}
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
