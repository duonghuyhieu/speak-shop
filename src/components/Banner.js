import React from "react";
import { Link } from "react-router-dom";

import { Banner as BannerImages } from "../assets";

import "../Styles/Banner.css";

function Banner() {
  return (
    <div className="Banner__wrapper grid">
      <Link to="/clothes" className="grid-1 ">
        <img src={BannerImages.clothes} alt=""></img>
      </Link>
      <Link to="/electronics" className="grid-item">
        <img src={BannerImages.electronic} alt=""></img>
      </Link>
      <Link to="/furniture" className="grid-item">
        <img src={BannerImages.furniture} alt=""></img>
      </Link>
      <Link to="/shoes" className="grid-item">
        <img src={BannerImages.shoes} alt=""></img>
      </Link>
      <Link to="/others" className="grid-item">
        <img src={BannerImages.others} alt=""></img>
      </Link>
    </div>
  );
}

export default Banner;
