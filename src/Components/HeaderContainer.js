import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/HeaderContainer.css";

function HeaderContainer() {
  // State to control the visibility of the mobile menu
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div className="container-fluid header-container">
      <div className="row">
        <div className="col-md-12">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                onClick={toggleMobileMenu}
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className={`collapse navbar-collapse ${
                  showMobileMenu ? "show" : ""
                }`}
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/movies" className="nav-link">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/webseries" className="nav-link">
                      WebSeries
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/register" className="nav-link">
                      Login/Sign-Up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container mt-4">
            <div className="row">
              <div className="col-md-6">
                <h1 className="title" id="Home" style={{ color: "dodgerblue" }}>
                  primevedio
                </h1>
              </div>
              <div className="col-md-6 text-right">
                <div className="input-group search-bar">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search Something..."
                    aria-label="Search Something..."
                  />
                  <div className="input-group-append">
                    <button className="btn btn-outline-primary" type="button">
                      <i className="fas fa-search"></i> Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h2 className="subtitle">
                  "Streaming with your best interests in mind"
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
