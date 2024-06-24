import React, { useContext } from "react";
import CircularProgressCountUp from "./CircleProgressbar";
import LinearProgressCountUp from "./LinearProgressbar";
import { FaCheck } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { MdDownload } from "react-icons/md";
import Resume from "../assets/md_Gousul_Islam_Mern-stack_developer_Bsc_in_CSE_2023.pdf";
import Stack from "@mui/material/Stack";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { themeContext } from "./Context"; // Import themeContext

export default function Sidebar() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className={`sidebar-content ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="pt-5 pb-2">
        <div className="py-4 px-10">
          <p className="flex">
            <span className="font-semibold w-1/2">Residence:</span>
            <span className="text-right opacity-50">Bangladesh</span>
          </p>
          <p className="flex">
            <span className="font-semibold w-1/2">City:</span>
            <span className="text-right opacity-50">Dhaka</span>
          </p>
          <p className="flex">
            <span className="font-semibold w-1/2">Age:</span>
            <span className="text-right opacity-50">24</span>
          </p>
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 opacity-30" />
        <div className="flex justify-between items-center px-10">
          <CircularProgressCountUp language="Bangla" endValue={100} />
          <CircularProgressCountUp language="English" endValue={90} />
          <CircularProgressCountUp language="Hindi" endValue={50} />
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 opacity-30" />
        <div className="flex-col justify-between items-center px-10">
          <LinearProgressCountUp skill="HTML" percentage={95} />
          <LinearProgressCountUp skill="CSS" percentage={95} />
          <LinearProgressCountUp skill="Bootstrap" percentage={85} />
          <LinearProgressCountUp skill="Tailwind CSS" percentage={95} />
          <LinearProgressCountUp skill="JavaScript" percentage={70} />
          <LinearProgressCountUp skill="React JS" percentage={80} />
          <LinearProgressCountUp skill="Redux" percentage={45} />
          <LinearProgressCountUp skill="Node JS" percentage={40} />
          <LinearProgressCountUp skill="Express JS" percentage={50} />
          <LinearProgressCountUp skill="MongoDB" percentage={70} />
          <LinearProgressCountUp skill="Mui Material" percentage={78} />
          <LinearProgressCountUp skill="Git & Github" percentage={70} />
        </div>
        <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 opacity-30" />
        <div className="px-10 space-y-1 pb-2">
          <h1 className="flex gap-4">
            <FaCheck className="text-yellow-500 text-lg font-bold" />
            Frontend Developer
          </h1>
          <h1 className="flex gap-4">
            <FaCheck className="text-yellow-500 text-lg font-bold" />
            Mern Stack Developer
          </h1>
          <h1 className="flex gap-4">
            <FaCheck className="text-yellow-500 text-lg font-bold" />
            Git Knowledge
          </h1>
        </div>
        <hr className="mt-2 mb-10 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 opacity-30" />
        <div className="text-center">
          <Button
            component="a"
            href={Resume}
            download
            variant="contained"
            tabIndex={-1}
            endIcon={<MdDownload />}
          >
            Download Cv
          </Button>
        </div>
        <hr className="my-4 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10 pt-10 opacity-30" />
        <div
          className={`fixed bottom-0 w-[322px] text-center py-6 shadow-sm z-10 ${
            darkMode ? "footer-card" : "bg-white"
          }`}
        >
          <Stack direction="row" className="overflow-hidden">
            <Button>
              <FaTwitter />
            </Button>
            <Button>
              <FaFacebookF />
            </Button>
            <Button>
              <FaInstagram />
            </Button>
            <Button>
              <FaLinkedin />
            </Button>
            <Button>
              <FaGithub />
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}
