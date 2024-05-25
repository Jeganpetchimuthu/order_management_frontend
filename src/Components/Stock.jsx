import React, { useState, useEffect } from "react";
import "../Style-Components/SalesInfo.css";
import axios from "axios";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";

function Stock() {
  const [stocks, setStocks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://ordermanagement-backend-vqfp.vercel.app/api/stockItem")
      .then((response) => setStocks(response.data))
      .catch((error) => console.log(error));
  }, []);

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/stockItem/${id}`);
      setProducts(stocks.filter((stock) => stock._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (stock) => {
    navigate(`/updateStock/${stock}`);
  };
  return (
    <div className="stock-flex-wrap">
      <DashBoard />
      <div className="stock-List">
        <h3 className="cusList">
          Stock List{" "}
          <Link className="cusLisSpan" to={"/AddStock"}>
            <span>Add</span>
          </Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="trStockContainer">
            <th className="product-th">Product</th>
            <th className="brand-th">Brand</th>
            <th className="category-th">Category</th>
            <th className="price-th">Price</th>
            <th className="stock-th">Stock</th>
            <th className="action-th">Action</th>
          </tr>
          {stocks.map((stock) => {
            return (
              <tr key={stock._id} className="tdStockContainer">
                <td className="product-td">{stock.product}</td>
                <td className="brand-td">{stock.brand}</td>
                <td className="category-t">{stock.category}</td>
                <td className="price-td">{stock.price}</td>
                <td className="stock-td">{stock.stock}</td>
                <td>
                  <button
                    className="product-delete-btn"
                    onClick={() => deleteProduct(stock._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="product-edit-btn"
                    onClick={() => handleEdit(stock._id)}
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

export default Stock;
