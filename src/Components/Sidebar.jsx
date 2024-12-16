import React, { useState } from "react";
import {
  FaHome,
  FaProjectDiagram,
  FaLayerGroup,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaMedium,
} from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to handle sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleSidebar}
        className="text-2xl text-white p-3 rounded-lg fixed top-4 left-4 z-50 lg:hidden"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`h-screen w-[17rem] bg-black  text-white flex flex-col items-center py-6 fixed top-0 z-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out`}
      >
        {/* Profile Image */}
        <img
          src="/image/profile.jpg"
          alt="profile"
          className="w-48 rounded-lg object-cover mb-4"
        />

        {/* Available Badge */}
        <div className="bg-green-600 text-sm px-3 py-1 rounded-full mb-6">
          <span className="text-white">● Available for Work</span>
        </div>

        {/* Navigation */}
        <nav className="w-full flex-1">
          <ul className="space-y-4">
            <Link
              to="/home"
              className="flex items-center px-6 py-2 bg-gray-800 rounded-lg"
            >
              <FaHome className="mr-4" /> <span>Home</span>
            </Link>
            <Link
              to="/about"
              className="flex items-center px-6 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
            >
              <IoPersonCircleSharp className="mr-4" /> <span>About</span>
            </Link>
            <Link
              to="/projects"
              className="flex items-center px-6 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
            >
              <FaProjectDiagram className="mr-4" /> <span>Projects</span>
            </Link>
            <Link
              to="skills"
              className="flex items-center px-6 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
            >
              <FaLayerGroup className="mr-4" /> <span>Skills</span>
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-6 py-2 hover:bg-gray-800 rounded-lg cursor-pointer"
            >
              <FaEnvelope className="mr-4" /> <span>Contact</span>
            </Link>
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl mt-auto mb-4">
          <Link  to="https://www.linkedin.com/in/aditya-pandey-070447233/" >
            <FaLinkedin className="cursor-pointer hover:text-blue-500" />
          </Link>
          <Link to="https://medium.com/@captain-adi">
            <FaMedium className="cursor-pointer hover:text-pink-500" />
          </Link>
          <Link to="">
            <FaWhatsapp className="cursor-pointer hover:text-green-500" />
          </Link>
          <Link to="https://x.com/adi_iox">
            <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
