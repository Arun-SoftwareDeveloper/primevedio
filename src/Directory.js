import React from "react";
import HeaderContainer from "./Components/HeaderContainer";
import CouroselImages from "./Components/CouroselImages";
import ThalaivarMovies from "./Components/ThalaivarMovies";
import KamalMovies from "./Components/KamalMovies";
import BestMoviesCollections from "./Components/BestMoviesCollections";
import Footer from "./Components/Footer";

function Directory() {
  return (
    <div className="container app-container mt-4">
      <div className="contianer mt-4">
        <div className="row">
          <div className="col-md-12">
            <HeaderContainer />
            <CouroselImages />
            <BestMoviesCollections />
            <ThalaivarMovies />
            <KamalMovies />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Directory;
