import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/HeaderContainer.css";

function HeaderContainer() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const toggleCategoriesDropdown = () => {
    setShowCategoriesDropdown(!showCategoriesDropdown);
  };

  const toggleLanguagesDropdown = () => {
    setShowLanguagesDropdown(!showLanguagesDropdown);
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

                  {/* Categories Dropdown */}
                  <li
                    className={`nav-item dropdown ${
                      showCategoriesDropdown ? "show" : ""
                    }`}
                  >
                    <span
                      className="nav-link dropdown-toggle"
                      onClick={toggleCategoriesDropdown}
                    >
                      Categories
                    </span>
                    <div
                      className={`dropdown-menu ${
                        showCategoriesDropdown ? "show" : ""
                      }`}
                    >
                      <Link to="/categories/drama" className="dropdown-item">
                        Drama
                      </Link>
                      <Link to="/categories/action" className="dropdown-item">
                        Action
                      </Link>
                      <Link to="/categories/comedy" className="dropdown-item">
                        Comedy
                      </Link>
                      {/* Add more subcategories as needed */}
                    </div>
                  </li>
                  {/* Languages Dropdown */}
                  <li
                    className={`nav-item dropdown ${
                      showLanguagesDropdown ? "show" : ""
                    }`}
                  >
                    <span
                      className="nav-link dropdown-toggle"
                      onClick={toggleLanguagesDropdown}
                    >
                      Languages
                    </span>
                    <div
                      className={`dropdown-menu ${
                        showLanguagesDropdown ? "show" : ""
                      }`}
                    >
                      <Link to="/languages/english" className="dropdown-item">
                        English
                      </Link>
                      <Link to="/languages/hindi" className="dropdown-item">
                        Hindi
                      </Link>
                      <Link to="/languages/spanish" className="dropdown-item">
                        Spanish
                      </Link>
                      {/* Add more languages as needed */}
                    </div>
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
