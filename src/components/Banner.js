import React from "react";
import { Link } from "react-router-dom";

import Clothes from "../assets/banner_clothes.jpg";
import Electronic from "../assets/banner_electronic.jpg";
import Furniture from "../assets/banner_furniture.jpg";
import Shoes from "../assets/banner_shoes.jpg";
import Others from "../assets/banner_others.jpg";

import "../Styles/Banner.css";
function Banner() {
  return (
    <div className="Banner__wrapper grid">
      <Link to="/clothes" className="grid-1 ">
        <img src={Clothes} alt=""></img>
      </Link>
      <Link to="/electronic" className="grid-item">
        <img src={Electronic} alt=""></img>
      </Link>
      <Link to="/furniture" className="grid-item">
        <img src={Furniture} alt=""></img>
      </Link>
      <Link to="/shoes" className="grid-item">
        <img src={Shoes} alt=""></img>
      </Link>
      <Link to="/others" className="grid-item">
        <img src={Others} alt=""></img>
      </Link>
    </div>
  );
}

export default Banner;
