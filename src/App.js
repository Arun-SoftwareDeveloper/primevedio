import React from "react";
import HeaderContainer from "./Components/HeaderContainer";
import CouroselImages from "./Components/CouroselImages";
import ThalaivarMovies from "./Components/ThalaivarMovies";
import KamalMovies from "./Components/KamalMovies";
import BestMoviesCollections from "./Components/BestMoviesCollections";

function App() {
  return (
    <div className="container app-container mt-4">
      <div className="row">
        <div className="col-md-12">
          <HeaderContainer />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <CouroselImages />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <BestMoviesCollections />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ThalaivarMovies />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <KamalMovies />
        </div>
      </div>
    </div>
  );
}

export default App;
