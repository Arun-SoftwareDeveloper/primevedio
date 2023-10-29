import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "../Components/HeaderContainer";
import HeaderContainer from "../Components/HeaderContainer";

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
        "http://localhost:4000/register",
        formData
      );
      if (response.status === 200) {
        toast.success("Registered Successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Registration Failed");
    }
  };

  return (
    <div className="container registerForm-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <HeaderContainer />
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
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </div>
  );
}

export default RegisterForm;
