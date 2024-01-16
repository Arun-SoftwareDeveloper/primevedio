// ThalaivarMovies.js
import React from "react";
import darbar from "../Images/Thalaivar/darbar.jpg";
import kabali from "../Images/Thalaivar/kabaali.jpg";
import petta from "../Images/Thalaivar/petta.jpg";
import annamalai from "../Images/Thalaivar/annamalai.jpg";
import jailer from "../Images/Thalaivar/jailer.webp";
import kochadaiyan from "../Images/Thalaivar/kochadaiyan.webp";
import kaala from "../Images/Thalaivar/kaala.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/ThalaivarMovies.css";

function ThalaivarMovies({ getStatusIcon }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const imageDetails = [
    { src: darbar, text: "Darbar (2017)", status: "Subscription" },
    { src: kabali, text: "Kabali (2015)", status: "Free" },
    { src: petta, text: "Petta (2019)", status: "Subscription" },
    { src: annamalai, text: "Annamalai (1999)", status: "Subscription" },
    { src: jailer, text: "Jailer (2023)", status: "Subscription" },
    { src: kochadaiyan, text: "Kochadaiyan (2013)", status: "Free" },
    { src: kaala, text: "Kaala (2016)", status: "Free" },
  ];

  return (
    <div className="container thalaivarMovies-container mt-4">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span style={{ color: "dodgerblue" }}>Prime-</span>Thalaivar
            </h1>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={false}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              customTransition="all 1s linear"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {imageDetails.map((item, index) => (
                <div key={index} className="thalaivar-image-container">
                  <img
                    src={item.src}
                    alt={`Thalaivar ${index + 1}`}
                    className="thalaivar-image"
                  />
                  <div className="thalaivar-overlay">
                    <div className="thalaivar-status-icon">
                      {getStatusIcon(item.status)}
                    </div>
                    <p className="thalaivar-text">{item.text}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThalaivarMovies;
