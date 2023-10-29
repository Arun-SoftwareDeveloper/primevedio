import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../Styles/LoginForm.css";
import HeaderContainer from "./HeaderContainer";
import { Link } from "react-router-dom";

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLoginForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://primevedio-backend.onrender.com/login",
        formData
      );
      if (response.status === 403) {
        console.log("Not a User,Please register");
        toast.error("Not a User,Please register");
      } else if (response.status === 209) {
        toast.success("Login Successfully");
      }
    } catch (error) {
      toast.error("Internal Server Error");
    }
  };
  return (
    <div className="container loginForm-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <HeaderContainer />
            <form className="form-group" onSubmit={handleLoginForm}>
              <input
                type="email"
                className="form-control"
                placeholder="enter your email"
                name="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="form-control"
                placeholder="enter your password"
                name="password"
                onChange={handleChange}
              />
              <span className="text-center">
                <button type="submit" className="btn btn-primary ">
                  Login
                </button>
              </span>
              <Link to="/forgotPassword">
                <p
                  className="text-center dodgerblue"
                  style={{ color: "dodgerblue", cursor: "pointer" }}
                >
                  {" "}
                  Forgot Password
                </p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
