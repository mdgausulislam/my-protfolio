import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { themeContext } from "./Context";

function Education() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-5 mt-10 lg:mt-0">
      <div>
        <h1 className="text-2xl font-bold text-center pb-4">Work Experience</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className=" ">
            <div className="timeline-middle">
              <FaCheckCircle />
            </div>
            <div
              className={`timeline-start md:text-end py-4 mb-10 bg-red-500 px-5 pb-5 w-[352px] rounded-lg ${
                darkMode ? "services-dark-mode" : ""
              }`}
            >
              <time className="font-mono italic flex items-center justify-center">
                FrontEnd Developer (Internship)
              </time>
              <div className="text-lg font-black flex items-center justify-center pb-3">
                Dhuruto Soft (It)
              </div>
              <p className="flex text-left">
                Experienced Frontend Developer at Dhurosoft, specializing in
                creating responsive and user-friendly web interfaces with modern
                technologies. Skilled in HTML, CSS, JavaScript, and React to
                deliver high-quality digital solutions.
              </p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center pb-4 mt-5 lg:mt-0">Education</h1>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li className=" ">
            <div className="timeline-middle">
              <FaCheckCircle />
            </div>
            <div
              className={`timeline-start md:text-end mb-10 bg-red-500 px-5 pb-5 w-[352px] rounded-lg ${
                darkMode ? "services-dark-mode" : ""
              }`}
            >
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">
                Secondary School Certificate <br /> (S.S.C)
              </div>
              <p>Abdur Rashid Sardar High School Bilbilash</p>
              <p>Passing Year: 2015</p>
              <p>Result: 4.39 (Out of 5)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaCheckCircle />
            </div>
            <div
              className={`timeline-start md:text-end mb-10 bg-red-500 px-5 pb-5 w-[352px] rounded-lg ${
                darkMode ? "services-dark-mode" : ""
              }`}
            >
              <time className="font-mono italic">2018</time>
              <div className="text-lg font-black">
                Higher School Certificate (H.S.C)
              </div>
              <p>Govt. Barishal College, Barishal</p>
              <p>Passing Year: 2018</p>
              <p>Result: 3.50 (Out of 5)</p>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <FaCheckCircle />
            </div>
            <div
              className={`timeline-start md:text-end mb-10 bg-red-500 px-5 pb-5 w-[352px] rounded-lg ${
                darkMode ? "services-dark-mode" : ""
              }`}
            >
              <time className="font-mono italic">2022</time>
              <div className="text-lg font-black">
                Bachelor of Science (B.Sc)
              </div>
              <p>Green University of Bangladesh</p>
              <p>Passing Year: 2022</p>
              <p>Result: 3.42 (Out of 4)</p>
            </div>
            <hr />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Education;
