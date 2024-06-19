import React from "react";
import BannerImg1 from "../assets/DJI_0002-1.jpg";
import BannerImg2 from "../assets/bannerImg.png";
import { Typewriter } from "react-simple-typewriter";

const typeWriterText = "I am a Mern Stack Developer.";

function Banner() {
  return (
    <div className="carousel w-full relative mt-10 lg:mt-0">
      {/* Image with gradient overlay */}
      <div
        className="relative w-full h-[300px] lg:h-[500px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(200, 47, 75, 0.5) 50%, rgba(220, 66, 37, 0.5) 100%), url(${BannerImg1})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Text overlay */}
        <div className="flex justify-between items-center absolute inset-0">
          <div className="flex flex-col justify-between items-start pl-2 lg:pl-20 lg:pt-32">
            <h1 className="text-white text-2xl lg:text-5xl font-bold">
              Discover my Amazing <br />
              Art Space!
            </h1>
            <p className="typewriter pt-2">
              <span className="text-white text-xs lg:text-xl hidden lg:block">
                <Typewriter
                  words={[typeWriterText]}
                  loop={5}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </p>
            <button className="button text-white font-bold px-2 py-2 lg:px-10 lg:py-5 mt-4 bg-red-600 hover:bg-red-700 rounded-lg">
              Explore Now
            </button>
          </div>
          <div className="right-0 overflow-hidden lg:mb-[200px]">
            <img
              src={BannerImg2}
              alt=""
              className="w-full lg:w-[550px] h-full"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="absolute flex justify-between items-center transform -translate-y-1/2 left-1 right-1 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default Banner;
