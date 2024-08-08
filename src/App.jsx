import React, { useContext, useEffect, useState } from "react";
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
import ProjectDetails from "./components/ProjectDetails";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching or other asynchronous operations
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the duration as per your requirement
  }, []);

  return (
    <ThemeProvider>
      <div
        className="overflow-hidden px-2 py-3 bg-white"
        style={{
          background: darkMode ? "black" : "white",
          color: darkMode ? "white" : "light-mode",
        }}
      >
        {loading ? (
          <div className="flex flex-col justify-center items-center h-screen">
            <div className="loader"></div>{" "}
            {/* Add your loader styling or component here */}
            <div className="text-center">
              <p className="text-orange-500 font-bold pt-4 block">
                {" "}
                Md Gousul Islam Hemonto
              </p>
              <p className="text-orange-500 font-bold pt-2">
                Software Engineering
              </p>
            </div>
          </div>
        ) : (
          <>
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
                <Route path="/project/:id" element={<ProjectDetails />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
