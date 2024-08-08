import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Sidebar from "../assets/project/Screenshot 2024-08-08 081616.png";
import Ecommerce from "../assets/ecommerce.png";
import HOC from "../assets/hoc.png";
import MusicApp from "../assets/musicapp.png";
import { themeContext } from "../components/Context";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const navigate = useNavigate(); // Initialize useNavigate

  const [selectedImage, setSelectedImage] = useState(""); // State for selected image
  const [isOpen, setIsOpen] = useState(false); // State for modal visibility

  // Add or remove class from body to prevent background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [isOpen]);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsOpen(true);
    document.getElementById("image_modal").showModal(); // Open the dialog modal
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage("");
    document.getElementById("image_modal").close(); // Close the dialog modal
  };

  const handleOutsideClick = (event) => {
    const dialog = document.getElementById("image_modal");
    if (dialog && !dialog.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    const dialog = document.getElementById("image_modal");
    if (dialog) {
      dialog.addEventListener("click", handleOutsideClick);
    }
    return () => {
      if (dialog) {
        dialog.removeEventListener("click", handleOutsideClick);
      }
    };
  }, []);

  const handleImageClick = (id) => {
    navigate(`/project/${id}`); // Navigate to project details page with id
  };

  return (
    <div className="pt-8 lg:px-10 px-2 h-auto lg:pb-20" id="portfolio">
      <h1 className="text-3xl px-10 text-orange-500 font-bold py-6 text-center">
        Recent Projects
      </h1>
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
        className="mt-5 w-full h-full"
      >
        <SwiperSlide>
          <div className="relative group">
            <img
              src={Sidebar}
              alt="Sidebar Project"
              className="w-full rounded-lg shadow-lg h-full object-cover cursor-pointer"
              onClick={() => handleImageClick("sidebar")}
            />
            <FaRegEye
              onClick={() => openModal(Sidebar)}
              className="absolute z-20 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img
              src={Ecommerce}
              alt="Ecommerce Project"
              className="w-full rounded-lg shadow-lg h-full object-cover cursor-pointer"
              onClick={() => handleImageClick("ecommerce")}
            />
            <FaRegEye
              onClick={() => openModal(Ecommerce)}
              className="absolute z-20 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img
              src={MusicApp}
              alt="Music App Project"
              className="w-full rounded-lg shadow-lg h-full object-cover cursor-pointer"
              onClick={() => handleImageClick("musicapp")}
            />
            <FaRegEye
              onClick={() => openModal(MusicApp)}
              className="absolute z-20 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative group">
            <img
              src={HOC}
              alt="HOC Project"
              className="w-full rounded-lg shadow-lg h-full object-cover cursor-pointer"
              onClick={() => handleImageClick("hoc")}
            />
            <FaRegEye
              onClick={() => openModal(HOC)}
              className="absolute z-20 text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Modal */}
      <dialog id="image_modal" className="modal modal-bottom sm:modal-middle">
        <div className="bg-white p-4 rounded-md lg:w-11/12 lg:max-w-5xl modal-box">
          <img
            src={selectedImage}
            alt="Selected Project"
            className="w-full max-h-screen"
          />
          <div className="modal-action">
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Projects;
