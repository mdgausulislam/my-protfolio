import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../assets/sidebar.png";
import Ecommerce from "../assets/ecommerce.png";
import HOC from "../assets/hoc.png";
import MusicApp from "../assets/musicapp.png";
import { themeContext } from "../components/Context";

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="pt-5 lg:px-10 px-2 h-auto lg:pb-20" id="portfolio">
      {" "}
      {/* Added Tailwind pt-5 class */}
      {/* heading */}
      <h1 className="text-3xl px-10 text-orange-500 font-bold py-6 text-center">
        Recent Projects
      </h1>{" "}
      {/* Adjusted font size classes to match your original sizes */}
      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        className="mt-5 w-full" // Added Tailwind mt-5 and w-full classes
      >
        <SwiperSlide>
          <img
            src={Sidebar}
            alt=""
            className="w-full rounded-lg shadow-lg lg:h-52 h-28 object-cover"
          />{" "}
          {/* Added Tailwind rounded-lg, shadow-lg, h-52, and object-cover classes */}
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={Ecommerce}
            alt=""
            className="w-full rounded-lg shadow-lg lg:h-52  h-28 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={MusicApp}
            alt=""
            className="w-full rounded-lg shadow-lg lg:h-52 h-28 object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={HOC}
            alt=""
            className="w-full rounded-lg shadow-lg lg:h-52  h-28 object-cover"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Projects;
