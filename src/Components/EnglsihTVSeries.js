// TamilWebSeries.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExternalLinkAlt,
  faCheckCircle,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/KamalMovies.css"; // Assuming you want to reuse the same styles
import HeaderContainer from "./HeaderContainer";
import WebSeriesCaurosel from "./WebSeriesCaurosel";

// Import your image files
import vilangu from "../Images/WebSeries/vilangu.jpg";
import vadhanthi from "../Images/WebSeries/vadhanthi.jpg";
import suzhal from "../Images/WebSeries/suzhal.jpg";
import ayali from "../Images/WebSeries/ayali.jpg";
import queen from "../Images/WebSeries/queen.jpg";
import mathagam from "../Images/WebSeries/mathagam.jpg";
import november_story from "../Images/WebSeries/november-story.jpg";

function TamilWebSeries() {
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

  const series = [
    { title: "Vilangu", image: vilangu, status: "Subscription" },
    { title: "Vadhanthi", image: vadhanthi, status: "Free" },
    { title: "Suzhal", image: suzhal, status: "Subscription" },
    { title: "Ayali", image: ayali, status: "Free" },
    { title: "Queen", image: queen, status: "Subscription" },
    { title: "Mathagam", image: mathagam, status: "Free" },
    { title: "November Story", image: november_story, status: "Subscription" },
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
    <div className="container kamalMovies-container mt-4">
      <div className="container mt-4">
        <HeaderContainer />
        <WebSeriesCaurosel />
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span style={{ color: "dodgerblue" }}>Prime-</span>TamilWebSeries
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
              {series.map((serie, index) => (
                <div key={index} className="kamal-image-container">
                  <img
                    src={serie.image}
                    alt={`TamilWebSeries ${index + 1}`}
                    className="kamal-image"
                  />
                  <div className="kamal-overlay">
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="external-link-icon"
                    />
                    <p className="kamal-status">
                      {getStatusIcon(serie.status)}
                    </p>
                    <p className="kamal-text">{serie.title}</p>
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

export default TamilWebSeries;
