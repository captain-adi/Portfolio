import React from "react";
import Hyperspeed from "./Hyperspeed/Hyperspeed";

const HomePage = () => {
  return (
    <div>
      <div className="hidden md:block">

      <Hyperspeed />
      </div>
      {/* Hero Section */}
      <div className="bg-gray-900 flex  justify-center items-center min-h-screen ">
      <div className="max-w-4xl mx-auto flex flex-col-reverse gap-5 items-center p-10 md:flex-row md:gap-0">
        {/* Text Section */}
        <div className="text-white w-1/2 ">
          <p className="text-sm font-semibold text-gray-300">HI, I'M ADITYA</p>
          <h1 className="text-5xl font-bold leading-tight mt-2">I'M A WEB<br /><span className="text-red-500">DESIGNER</span></h1>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
            libero et velit interdum, ac aliquet odio mattis.
          </p>
          <button className="mt-6 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition">
            VIEW MY PROJECTS
          </button>
        </div>
        
        {/* Image Section */}
        <div className="w-[90%] flex justify-center z-10 md:w-1/2">
          <img
            src="/image/profile.jpg"
            alt="Profile Picture"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomePage;
