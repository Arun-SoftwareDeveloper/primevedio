import React, { useState } from "react";
import HeaderContainer from "./Components/HeaderContainer";
import CouroselImages from "./Components/CouroselImages";
import ThalaivarMovies from "./Components/ThalaivarMovies";
import KamalMovies from "./Components/KamalMovies";
import BestMoviesCollections from "./Components/BestMoviesCollections";
import Footer from "./Components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faDollarSign } from "@fortawesome/free-solid-svg-icons";

function Directory() {
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
    <div className="container app-container mt-4">
      <div className="contianer mt-4">
        <div className="row">
          <div className="col-md-12">
            <HeaderContainer />
            <CouroselImages />
            <BestMoviesCollections />
            <ThalaivarMovies getStatusIcon={getStatusIcon} />
            <KamalMovies getStatusIcon={getStatusIcon} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directory;
