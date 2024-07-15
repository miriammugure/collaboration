import React from "react";
import "./FeaturedWork.css";

function Map({ image, descriptiontitle, year, subtitle, text }) {
  return (
    <div className="ActualContainer">
      <div className="IndividualWorkContainer">
        <div className="featureImage">
          <img src={image} alt="" />
        </div>
        <div className="featureDescription">
          <div className="descriptionTitle">
            <p>{descriptiontitle}</p>
          </div>
          <div className="subtitle">
            <p className="year">{year}</p>
            <p>{subtitle}</p>
          </div>
          <div className="FeaturedText">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Map;
