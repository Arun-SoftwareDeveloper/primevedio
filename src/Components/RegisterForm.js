import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import HeaderContainer from "../Components/HeaderContainer";
import "../Styles/RegisterForm.css";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://primevedio-backend.onrender.com/register",
        formData
      );
      if (response.status === 200) {
        // Show a success toast
        toast.success("Registration successful!");
      }
    } catch (error) {
      // Show an error toast
      toast.error("Internal Server error");
      console.error(error);
    }
  };

  return (
    <div className="container registerForm-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title text-center">primevedio</h1>
            <form
              className="form-group text-center"
              onSubmit={handleRegisterForm}
            >
              <input
                type="text"
                placeholder="Enter your first name"
                className="form-control"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Enter your last name"
                className="form-control"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="form-control"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-primary">
                Register
              </button>
              <br />
              <p></p>
              <p className="text-left black">
                Already a User?
                <Link to="/login">
                  <span style={{ color: "dodgerblue", cursor: "pointer" }}>
                    Login
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
