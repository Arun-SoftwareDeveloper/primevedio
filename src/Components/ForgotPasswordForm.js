import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../Styles/ForgotPasswordForm.css";
import { Link } from "react-router-dom";

function ForgotPasswordForm() {
  const [email, setEmail] = useState(""); // Add state for the email input

  const handleForgotPasswordForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/forgotPassword",
        {
          email: email, // Send the email as part of the request
        }
      );
      if (response.status === 406) {
        console.log("User not found");
        toast.error("User not found");
      } else if (response.status === 500) {
        toast.error("Failed to send reset password email");
      } else if (response.status === 200) {
        toast.success("Password Reset link sent successfully");
      }
    } catch (error) {
      console.log("Internal Server error");
      toast.error("Internal Server error");
    }
  };

  return (
    <div className="container forgotPassword-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1 className="title text-center">primevedio</h1>
            <Link to="/">
              <span className="back-btn">
                {" "}
                <i class="fa-regular fa-circle-left"></i>
              </span>
            </Link>
            <form className="form-group" onSubmit={handleForgotPasswordForm}>
              <input
                type="email"
                className="form-control"
                placeholder="enter your valid email-Id"
                name="email"
                value={email} // Bind the input value to the email state
                onChange={(e) => setEmail(e.target.value)} // Update the email state
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordForm;
