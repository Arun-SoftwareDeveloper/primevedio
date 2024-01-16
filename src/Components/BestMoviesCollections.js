import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCheckCircle,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import "../Styles/BestMoviesCollections.css";

// Import your image files
import moodarkoodam from "../Images/BestMoviesCollections/moodarkoodam.jpg";
import subramaniyapuram from "../Images/BestMoviesCollections/subramaniyapuram.jpg";
import onnaiyumattukuttiyum from "../Images/BestMoviesCollections/onnaiyumattukuttiyum.webp";
import uriyadi from "../Images/BestMoviesCollections/uriyadi.jpg";
import gangsofwasheepur from "../Images/BestMoviesCollections/gangsofwasheepur.jpg";
import kattrathutamil from "../Images/BestMoviesCollections/kattrathutamil.jpg";
import naankadavul from "../Images/BestMoviesCollections/naankadavul.jpg";

function BestMoviesCollections() {
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

  const movies = [
    { title: "Moodar Koodam", image: moodarkoodam, status: "Free" },
    {
      title: "Subramaniyapuram",
      image: subramaniyapuram,
      status: "Subscription",
    },
    {
      title: "Onnaiyum Attukuttiyum",
      image: onnaiyumattukuttiyum,
      status: "Free",
    },
    { title: "Uriyadi", image: uriyadi, status: "Free" },
    {
      title: "Gangs of Wasseypur",
      image: gangsofwasheepur,
      status: "Subscription",
    },
    { title: "Kattradhu Thamizh", image: kattrathutamil, status: "Free" },
    { title: "Naan Kadavul", image: naankadavul, status: "Free" },
  ];

  const externalLink = "https://www.example.com"; // Replace with the correct link

  const getStatusIcon = (status) => {
    switch (status) {
      case "Free":
        return <FontAwesomeIcon icon={faCheckCircle} />;
      case "Subscription":
        return <FontAwesomeIcon icon={faDollarSign} />;
      default:
        return null;
    }
  };

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
              {movies.map((movie, index) => (
                <Link to={`/movie/${movie.title}`} key={index}>
                  <div className="bestMoviesCollections-image-container">
                    <img
                      src={movie.image}
                      alt={`BestMoviesCollections ${index + 1}`}
                      className="bestMoviesCollections-image"
                    />
                    <div className="bestMoviesCollections-overlay">
                      <FontAwesomeIcon
                        icon={faExternalLinkAlt}
                        className="external-link-icon"
                      />
                      <p className="bestMoviesCollections-status">
                        {getStatusIcon(movie.status)}
                      </p>
                      <p className="bestMoviesCollections-text">
                        {movie.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BestMoviesCollections;
