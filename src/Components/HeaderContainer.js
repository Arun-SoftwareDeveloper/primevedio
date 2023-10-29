import React from "react";
import "../Styles/HeaderContainer.css";

function HeaderContainer() {
  return (
    <div className="container-fluid header-container">
      {" "}
      {/* Use container-fluid for full width */}
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <h1 className="title" style={{ color: "dodgerblue" }}>
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
                  {" "}
                  {/* Use btn-outline-primary for the button style */}
                  <i className="fas fa-search"></i> Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {" "}
          {/* Create a new row for the subtitle */}
          <div className="col-md-12">
            <h2 className="subtitle">
              "Streaming with your best interests in mind"
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContainer;
