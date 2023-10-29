import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Directory from "./Directory";

function App() {
  return (
    <div className="container app-container mt-4">
      <Router>
        <Routes>
          <Route path="/" element={<Directory />} />

          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
