import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import PricePlans from "./PricePlans";
import Works from "./Works";
import Projects from "./Projects";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <PricePlans />
      <Works />
      <Projects />
      <Blog />
    </div>
  );
};

export default Home;
