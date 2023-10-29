import React from "react";
import moodarkoodam from "../Images/BestMoviesCollections/moodarkoodam.jpg";
import subramaniyapuram from "../Images/BestMoviesCollections/subramaniyapuram.jpg";
import onnaiyumattukuttiyum from "../Images/BestMoviesCollections/onnaiyumattukuttiyum.webp";
import uriyadi from "../Images/BestMoviesCollections/uriyadi.jpg";
import gangsofwasheepur from "../Images/BestMoviesCollections/gangsofwasheepur.jpg";
import kattrathutamil from "../Images/BestMoviesCollections/kattrathutamil.jpg";
import naankadavul from "../Images/BestMoviesCollections/naankadavul.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the carousel styles
import "../Styles/BestMoviesCollections.css";
function BestMoviesCollections(props) {
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

  const images = [
    moodarkoodam,
    subramaniyapuram,
    onnaiyumattukuttiyum,
    uriyadi,
    gangsofwasheepur,
    kattrathutamil,
    naankadavul,
  ];

  return (
    <div className="container bestMoviesCollections-container mt-4">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span style={{ color: "dodgerblue" }}>Prime-</span>BestCollections
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
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bestMoviesCollections-image-container"
                >
                  <img
                    src={image}
                    alt={`BestMoviesCollections ${index + 1}`}
                    className="bestMoviesCollections-image"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestMoviesCollections;
