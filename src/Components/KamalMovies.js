import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import nayakan from "../Images/Kamal/nayakan.jpg";
import indian2 from "../Images/Kamal/indian-2.jpg";
import heyram from "../Images/Kamal/hey-ram.jpg";
import uthamavillan from "../Images/Kamal/uthamavillan.jpg";
import virumandi from "../Images/Kamal/virumandi.webp";
import vishwaroopam from "../Images/Kamal/vishwaroopam.jpg";
import dasavadharam from "../Images/Kamal/dasavadharam.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../Styles/KamalMovies.css";

function KamalMovies({ getStatusIcon }) {
  const images = [
    { title: "Nayakan", image: nayakan, text: "Nayakan", status: "Free" },
    {
      title: "Indian 2",
      image: indian2,
      text: "Indian 2",
      status: "Subscription",
    },
    { title: "Hey Ram", image: heyram, text: "Hey Ram", status: "Free" },
    {
      title: "Uthamavillan",
      image: uthamavillan,
      text: "Uthamavillan",
      status: "Subscription",
    },
    {
      title: "Virumandi",
      image: virumandi,
      text: "Virumandi",
      status: "Subscription",
    },
    {
      title: "Vishwaroopam",
      image: vishwaroopam,
      text: "Vishwaroopam",
      status: "Free",
    },
    {
      title: "Dasavadharam",
      image: dasavadharam,
      text: "Nayakan",
      status: "Free",
    },
  ];

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

  return (
    <div className="container kamalMovies-container mt-4">
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <h1>
              <span style={{ color: "dodgerblue" }}>Prime-</span>Kamal
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
                <div key={index} className="kamal-image-container">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="kamal-image"
                  />
                  <div className="kamal-overlay">
                    <p className="kamal-text">{getStatusIcon(image.status)}</p>
                    <p className="kamal-text">{image.text}</p>
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

export default KamalMovies;
