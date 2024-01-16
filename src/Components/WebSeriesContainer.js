import React from "react";
import TamilWebSeries from "./TamilWebSeries";
import EnglishTVSeries from "./EnglsihTVSeries";
import HeaderContainer from "./HeaderContainer";
import WebSeriesCaurosel from "./WebSeriesCaurosel";
import BoolyWoodWebSeries from "./BoolyWoodWebSeries";
import Footer from "./Footer";

function WebSeriesContainer() {
  return (
    <div>
      <TamilWebSeries />
      <EnglishTVSeries />
      <BoolyWoodWebSeries />
      <Footer />
    </div>
  );
}

export default WebSeriesContainer;
