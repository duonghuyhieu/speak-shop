import { useContext } from "react";

import { AppContext } from "../store";
import Slideshow from "../components/Slideshow";
import Banner from "../components/Banner";
import { Banner as BannerImages } from "../assets";
import "../Styles/Home.css";
const Home = () => {
  const { state } = useContext(AppContext);
  console.log(state); 
  return (
    <>
      <Slideshow />
      <Banner />
      <h1>NEW ARRIVALS</h1>
      <img src={BannerImages.line} alt="" />
      <img src={BannerImages.mini} className="Home_bannerMini" alt="" />
      <h1>STORE SYSTEM</h1>
      <img src={BannerImages.line} alt="" />
      <img src={BannerImages.system} className="Home_storeSystem" alt="" />
    </>
  );
};

export default Home;
