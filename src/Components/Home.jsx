import React from "react";
import Hyperspeed from "./Hyperspeed/Hyperspeed";

const HomePage = () => {
  return (
    <div>
      <Hyperspeed/>
      {/* Hero Section */}
      <section className="relative text-white h-screen flex flex-col justify-center items-center text-center px-6">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('your-image-url.jpg')" }}
        ></div>
        <div className="relative z-10">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-white">
            Hii, I'm Aditya
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-red-600 mb-6">
            Web Developer & Designer
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm a passionate web developer who specializes in creating
            responsive and visually appealing websites using modern tools and
            technologies like React, Next.js, and Tailwind CSS.
          </p>
          <a
            href="#contact"
            className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
