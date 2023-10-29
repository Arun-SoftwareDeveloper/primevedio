import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Directory from "./Directory";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import ForgotPasswordForm from "./Components/ForgotPasswordForm";

function App() {
  return (
    <div className="container app-container mt-4">
      <Router>
        <Routes>
          <Route path="/" element={<Directory />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/forgotPassword" element={<ForgotPasswordForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
