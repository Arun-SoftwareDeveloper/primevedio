import React from "react";
import ThalaivarMovies from "./ThalaivarMovies";
import KamalMovies from "./KamalMovies";

function MoviesContainer({ searchQuery }) {
  return (
    <div className="contianer moviesContainer">
      <div className="contianer mt-4">
        <div className="row">
          <div className="col-md-12">
            <ThalaivarMovies />
            <KamalMovies searchQuery={searchQuery} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviesContainer;
