import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderContainer from "./Components/HeaderContainer";
import CouroselImages from "./Components/CouroselImages";
import ThalaivarMovies from "./Components/ThalaivarMovies";
import KamalMovies from "./Components/KamalMovies";
import BestMoviesCollections from "./Components/BestMoviesCollections";
import Footer from "./Components/Footer";
import RegisterForm from "./Components/RegisterForm";
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
