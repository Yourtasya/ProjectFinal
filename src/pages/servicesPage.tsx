import React from "react";

import "../styles/pageStyles/servicesPage.css";
import "../styles/pageStyles/aboutPage.css";

export default function ServicesPage() {
  return (
    <div className="ServicesPage">
      <div className="HomePageContainer">
        <div className="FirstBlock">
          <p className="FirstBlockSubtittle">SHORT STORY ABOUT US</p>
          <p className="FirstBlockTittle">
            The big story behind, our <br></br>beautyness center
          </p>
          <button className="FirstBlockButton">Make a reservation</button>
        </div>
      </div>
    </div>
  );
}
