import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Assuming you use React Router

function ResetPassword() {
  const { token } = useParams(); // Get the reset token from the URL
  const navigate = useNavigate();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetPassword = async (e) => {
    e.preventDefault();

    // Validate passwords (add more validation as needed)
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Send a request to your backend to reset the password
    const resetData = { token, newPassword };
    try {
      const response = await fetch(
        `http://localhost:4000/resetPassword/${token}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(resetData),
        }
      );

      if (response.status === 200) {
        alert("Password reset successfully");
        navigate.push("/login"); // Redirect to the login page
      } else {
        const data = await response.json();
        alert(data.message);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div>
      <h1>Password Reset</h1>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="newPassword">New Password:</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <br />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
}

export default ResetPassword;
