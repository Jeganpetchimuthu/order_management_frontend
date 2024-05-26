import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Style-Components/Customer.css";
import DashBoard from "./DashBoard";
import { Link, useNavigate } from "react-router-dom";

function Customer() {
  const [customer, setCustomer] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://ordermanagement-backend-vqfp.vercel.app/api/customer")
      .then((response) => setCustomer(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://ordermanagement-backend-vqfp.vercel.app/api/customer/${id}`
      );
      setCustomer(customer.filter((customers) => customers._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (customers) => {
    navigate(`/updateCustomer/${customers}`);
  };
  return (
    <div className="customer-flex-wrap">
      <br />
      <br />
      <br />
      <br />
      <br />
      <DashBoard />
      <div className="customerList-wrap">
        <h3 className="cusList">
          Customer List
          <Link to={"/addCustomer"}>
            <span className="cusLisSpan">Add</span>
          </Link>
        </h3>
      </div>
      <table>
        <tbody>
          <tr className="trContainer">
            <td className="customerc-th">CustomerName</td>
            <td className="customere-th">Email</td>
            <td className="customera-th">Address</td>
            <td className="customerm-th">MobileNumber</td>
            <td className="customerst-th">Status</td>
            <td className="customeratn-th">Action</td>
          </tr>
          {customer.map((customers) => {
            return (
              <tr key={customers._id} className="tdContainer">
                <td className="customerC-th">{customers.customerName}</td>
                <td className="customerE-th">{customers.email}</td>
                <td className="customerA-th">{customers.address}</td>
                <td className="customerM-th">{customers.mobileNumber}</td>
                <td className="customerST-th">{customers.status}</td>
                <td>
                  <button
                    className="customer-delete-btn"
                    onClick={() => handleDelete(customers._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="customer-edit-btn"
                    onClick={() => handleEdit(customers._id)}
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

export default Customer;
