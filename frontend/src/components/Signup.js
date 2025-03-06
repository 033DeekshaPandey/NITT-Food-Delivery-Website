import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://nitt-food-delivery-backend.onrender.com/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });

    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert(json.message);
      //save the auth toke to local storage and redirect
      //   localStorage.setItem('token', json.authToken)
      //   navigate("/login")
    } else {
      alert(json.message);
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <form className=" login1" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className=" myinput "
              name="name"
              value={credentials.name}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Webmail ID
            </label>
            <input
              type="email"
              className=" myinput "
              name="email"
              value={credentials.email}
              onChange={onChange}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className=" myinput "
              name="password"
              value={credentials.password}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Address
            </label>
            <input
              type="text"
              className=" myinput "
              name="location"
              value={credentials.location}
              onChange={onChange}
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Login As</label>
            <select className="myinput" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="student">Student</option>
              <option value="vendor">Vendor</option>
            </select>
          </div>
          <button type="submit" className="m-3 mybtn">
            Submit
          </button>
          <Link to="/login" className="m-3 mybtn">
            Already a user?
          </Link>
        </form>
      </div>
      <Footer />
    </>
  );
}
