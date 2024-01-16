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

// Import your image files
import farzi from "../Images/WebSeries/farzi.jpg";
import mirzapur from "../Images/WebSeries/mirzapur.jpg";
import railwayman from "../Images/WebSeries/railwayman.jpg";
import gg from "../Images/WebSeries/gg.jpg";
import familyman from "../Images/WebSeries/familyman.jpg";
import scam from "../Images/WebSeries/scam.jpg";
import mumbaidiaries from "../Images/WebSeries/mumbaidiaries.jpg";

function BoolyWoodWebSeries() {
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
    { title: "Farzi", image: farzi, status: "Subscription" },
    { title: "Mirzapur", image: mirzapur, status: "Free" },
    { title: "Railway Man", image: railwayman, status: "Subscription" },
    { title: "GG", image: gg, status: "Free" },
    { title: "Family Man", image: familyman, status: "Subscription" },
    { title: "Scam", image: scam, status: "Free" },
    { title: "Mumbai Diaries", image: mumbaidiaries, status: "Subscription" },
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
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span style={{ color: "dodgerblue" }}>Prime-</span>
              BollywoodWebSeries
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
                    alt={`BollywoodWebSeries ${index + 1}`}
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

export default BoolyWoodWebSeries;
