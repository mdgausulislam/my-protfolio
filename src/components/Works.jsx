import React, { useContext } from "react";
import Upwork from "../assets/Upwork.png";
import Fiverr from "../assets/fiverr.png";
import Amazon from "../assets/amazon.png";
import Shopify from "../assets/Shopify.png";
import Facebook from "../assets/Facebook.png";
import { themeContext } from "../components/Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div>
      <h1 className="text-3xl px-10 text-orange-500 font-bold py-6 text-center">
        My Works
      </h1>
      <div className="works pl-10 lg:pl-2" id="works">
        {/* left side */}
        <div className="w-left">
          <div className="awesome">
            {/* dark Mode */}
            <span style={{ color: darkMode ? "white" : "" }}>
              Works for All these
            </span>
            <span>Brands & Clients</span>
            <spane>
              Lorem ispum is simpley dummy text of printing of printing Lorem
              <br />
              ispum is simpley dummy text of printingLorem ispum is simpley
              dummy text
              <br />
              y dummy text of printingLorem
              <br />
              ispum is simpley dummy text of printing
            </spane>
            <Link to="contact" smooth={true} spy={true}>
              <button className="button mt-5">Hire Me</button>
            </Link>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>

          {/* right side */}
        </div>
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            <div className="w-secCircle">
              <img src={Upwork} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Fiverr} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Amazon} alt="" />
            </div>{" "}
            <div className="w-secCircle">
              <img src={Shopify} alt="" />
            </div>
            <div className="w-secCircle">
              <img src={Facebook} alt="" />
            </div>
          </motion.div>
          {/* background Circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
