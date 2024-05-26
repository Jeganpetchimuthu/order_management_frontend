import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style-Components/Register.css";
import "../Style-Components/Login.css";
function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://ordermanagement-backend-vqfp.vercel.app/api/login",
        formData
      );

      const { token } = response.data;
      localStorage.setItem("token", token);
      console.log(response);

      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-components">
      <h1 className="userLogin">User Login</h1>
      <form className="form-login" onSubmit={handleSubmit}>
        <label className="signEmail">
          Email Address
          <br />
          <input
            className="regInEmail"
            type="text"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
        </label>

        <label className="singpass">
          Password
          <br />
          <input
            className="regInPassword"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <br />
        </label>
        <br />
        <button className="reg-button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
