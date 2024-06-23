import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import { ThemeProvider, themeContext } from "./components/Context";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Drawer2 from "./components/Drawer2";
import Education from "./components/Education";
import Services from "./components/Services";
import PricePlans from "./components/PricePlans";
import Works from "./components/Works";
import Projects from "./components/Projects";
import Recomandation from "./components/Recomandation";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <ThemeProvider>
      <div
        className="overflow-hidden px-2 py-3 text-[var--(black)]"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Drawer2 />
        <div className="md:ml-[340px] md:mr-[65px]">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<Education />} />
            <Route path="/services" element={<Services />} />
            <Route path="/price-plans" element={<PricePlans />} />
            <Route path="/works" element={<Works />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/recomandation" element={<Recomandation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
