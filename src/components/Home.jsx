import React from "react";
import Banner from "./Banner";
import Services from "./Services";
import PricePlans from "./PricePlans";
import Works from "./Works";
import Projects from "./Projects";
import Blog from "./Blog";
import Recomandation from "./Recomandation";
import Experience from "./Experience";
import Header from "./Header";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Experience />
      <Services />
      <PricePlans />
      <Works />
      <Projects />
      <Recomandation />
      <Blog />
    </div>
  );
};

export default Home;
