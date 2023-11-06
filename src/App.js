import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Directory from "./Directory";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";
import WebSeries from "./Components/WebSeries";
import ResetPassword from "./Components/ResetPassword";

function App() {
  return (
    <div className="container app-container mt-4">
      <Router>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/webseries" element={<WebSeries />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
