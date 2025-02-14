import React from "react";
import { Link } from "react-router-dom";
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className=" text-white bg-black h-screen flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Form */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Let's Connect!</h1>
          <h2 className="font-semibold mb-4">Message Me</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-800 text-white rounded outline-none"
              />
            </div>
            <textarea
              placeholder="Message"
              rows="6"
              className="w-full p-3 bg-gray-800 text-white rounded outline-none"
            />
            <button
              type="submit"
              className="w-full bg-green-400 text-black font-semibold py-3 rounded hover:bg-green-500 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right - Contact & Social Media */}
        <div>
          <h2 className="font-semibold mb-4">Contact</h2>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <FiMail size={20} />
              <a
                href="mailto:prinejot022@gmail.com"
                className="hover:underline"
              >
                adipandey830@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FiPhone size={20} />
              <span>+91 9171977959</span>
            </li>
          </ul>

          <h2 className="font-semibold mt-6 mb-4">Social Media</h2>
          <div className="flex space-x-6 text-xl mt-auto mb-4">
            <Link to="linkedin.com/in/aditya-pandey-070447233">
              <FaLinkedin className="cursor-pointer hover:text-blue-500" />
            </Link>
            <Link to="https://www.instagram.com/aditya.iox/">
              <FiInstagram className="cursor-pointer hover:text-pink-500" />
            </Link>
            <Link to="">
              <AiOutlineWhatsApp className="cursor-pointer hover:text-green-500" />
            </Link>
            <Link to="https://x.com/adi_iox">
              {" "}
              <FaXTwitter className="cursor-pointer hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
