import React from "react";

import "./App.css";

import Register from "./Components/Register";
import Login from "./Components/Login";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import Customer from "./Components/Customer";
import ProductList from "./Components/ProductList";
import OrderList from "./Components/OrderList";
import Stock from "./Components/Stock";
import AddCustomer from "./Components/AddCustomer";
import AddOrder from "./Components/AddOrder";
import AddProduct from "./Components/AddProduct";
import AddStock from "./Components/AddStock";
import UpdateProduct from "./Components/UpdateProduct";

import UpdateCustomer from "./Components/UpdateCustomer";
import UpdateOrder from "./Components/UpdateOrder";
import UpdatesStock from "./Components/UpdatesStock";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/home" element={<Header />} />
          <Route exact path="/user" element={<Header />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/customer" element={<Customer />} />
          <Route exact path="/customerList" element={<Customer />} />
          <Route exact path="/product" element={<ProductList />} />
          <Route exact path="/productList" element={<ProductList />} />
          <Route exact path="/order" element={<OrderList />} />
          <Route exact path="/orderList" element={<OrderList />} />
          <Route exact path="/stock" element={<Stock />} />
          <Route exact path="/stockList" element={<Stock />} />
          <Route exact path="/addCustomer" element={<AddCustomer />} />
          <Route exact path="/addOrder" element={<AddOrder />} />
          <Route exact path="/addProduct" element={<AddProduct />} />
          <Route exact path="/AddStock" element={<AddStock />} />
          <Route exact path="/updateProduct/:id" element={<UpdateProduct />} />
          <Route exact path="/updateStock/:id" element={<UpdatesStock />} />
          <Route
            exact
            path="/updateCustomer/:id"
            element={<UpdateCustomer />}
          />
          <Route exact path="/updateOrder/:id" element={<UpdateOrder />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
