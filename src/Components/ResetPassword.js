import React, { useState } from "react";
import { toast } from "react-toastify";

function ResetPassword() {
  const [token, setToken] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Make a POST request to your server to reset the password
    try {
      const response = await fetch("http://localhost:4000/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token, newPassword }),
      });

      if (response.status === 208) {
        console.log("Password reset successful");
        toast.success("Password reset successful");
      } else {
        console.error("Password reset failed");
        toast.error("Password reset failed");
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="container">
      <form className="mt-4" onSubmit={handleSubmit}>
        <h1 className="mt-5">primevedio</h1>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Reset Password
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
