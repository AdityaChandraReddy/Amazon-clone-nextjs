import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import React from "react";
import Image from "next/image";
// import log from "../assests/logo.png";
// const photo = require("../assests/logo.png");
// import { Carousel } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20  " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicator={true}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img
            loading="lazy"
            src="https://links.papareact.com/gi1"
            alt="banner_pic"
          />
        </div>
        <div>
          {/* <Image
            width={100}
            height={200}
            loading="lazy"
            // src="https://links.papareact.com/6gg"
            src={photo}
            alt="banner_pic"
          /> */}
        </div>
        <div>
          <img
            loading="lazy"
            // src="https://links.papareact.com/7ma"
            src="https://links.papareact.com/7ma"
            alt="banner_pic"
            height="600"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
