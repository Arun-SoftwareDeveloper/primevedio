import React from "react";
import Footer from "./Footer";
import primevedioImage from "../Images/WebSeries/primevedio.jpg"; // Replace with the actual path to your image
import "../Styles/PrimeDashBoard.css";

function PrimeDashboard() {
  return (
    <>
      <div className="primeDashboard-container container mt-4">
        <div className="header-container">
          <p>primevedio</p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="mid-container">
              <h1>Welcome to the primevedio</h1>
              <h5>
                Watch the latest movies, web series with primevedio originals.
              </h5>
              <button className="btn" style={{ backgroundColor: "dodgerblue" }}>
                Sign in to join prime
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="image-container">
              <img src={primevedioImage} alt="Primevedio Image" />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default PrimeDashboard;
