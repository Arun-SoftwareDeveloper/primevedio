import React from "react";
import Image1 from "../Images/vikram.webp";
import Image2 from "../Images/darbar.jpg";
import Image3 from "../Images/panchadhandhiram.jpg";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JavaScript
import "../Styles/CarouselImages.css";

function CouroselImages() {
  return (
    <div className="container carousel-container">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={Image1}
                    alt="Vikram"
                    className="d-block w-100"
                    style={{ width: "800px", height: "450px" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image2}
                    alt="Darbar"
                    className="d-block w-100"
                    style={{ width: "800px", height: "450px" }}
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={Image3}
                    alt="Panchadhandhiram"
                    className="d-block w-100"
                    style={{ width: "800px", height: "450px" }}
                  />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#myCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CouroselImages;
