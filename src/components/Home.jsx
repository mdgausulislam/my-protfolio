import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Experience from "./Experience";
import Services from "./Services";
import PricePlans from "./PricePlans";
import Works from "./Works";
import Projects from "./Projects";
import Education from "./Education";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Experience />
      <Education />
      <Services />
      <PricePlans />
      <Works />
      <Projects />

      <Footer />
    </div>
  );
};

export default Home;
