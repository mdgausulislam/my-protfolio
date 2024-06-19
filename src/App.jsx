import { useContext } from "react";
import "./App.css";
import Header from "./components/Header";
import { themeContext } from "./components/Context";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Services from "./components/Services";
import PricePlans from "./components/PricePlans";
import Works from "./components/Works";
import Projects from "./components/Projects";
import Recomandation from "./components/Recomandation";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="overflow-hidden px-2 py-3 text-[var--(black)]"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="md:ml-[340px] md:mr-[65px]">
        <Header />

        <Banner />
        <Experience />
        <Services />
        <PricePlans />
        <Works />
        <Projects />
        <Recomandation />
        <Education />
        <Contact />
        <Blog />
        <Footer />
      </div>
    </div>
  );
}

export default App;
