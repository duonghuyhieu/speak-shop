import React, { useEffect, useState } from "react";
import { Slice } from "../assets";
import "../Styles/Slideshow.css";
const slides = [Slice.slice1, Slice.slice2, Slice.slice3];
const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setIndex((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 3000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);

  console.log(index, slides.length - 1);
  return (
    <div
      className="Home__slideWrapper"
      style={{ backgroundImage: `url(${slides[index]})` }}
    />
  );
};

export default Slideshow;
