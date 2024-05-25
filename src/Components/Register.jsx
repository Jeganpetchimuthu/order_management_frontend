import React, { useState } from "react";
import axios from "axios";
import "../Style-Components/Register.css";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://ordermanagement-backend-vqfp.vercel.app/api/signup",
        {
          firstName,
          lastName,
          email,
          password,
        }
      );
      console.log(response.data);
      navigate("/Login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <br />
      <h1 className="userregister">User Register</h1>
      <form className="form-reg" onSubmit={handleSubmit}>
        <label className="signFn">FirstName</label>
        <br />
        <input
          className="regInfn"
          type="text"
          name="firstName"
          placeholder="FirstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label className="signLn">
          LastName
          <br />
          <input
            className="regInfln"
            type="text"
            name="lastName"
            placeholder="LastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <br />
        </label>
        <label className="signEmail">
          Email Address
          <br />
          <input
            className="regInEmail"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
        </label>
        <br />
        <button className="reg-button" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
