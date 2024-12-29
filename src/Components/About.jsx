import React from "react";

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <div className="max-w-5xl mx-auto shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-800 p-6 rounded-t-lg">
          <h2 className="text-3xl font-bold mb-4 text-center border-b-4 border-teal-500 inline-block">
            About Me
          </h2>
        </div>
        <div className="bg-black p-8">
          <p className="mt-6 text-sm leading-relaxed">
            Hello! I’m{" "}
            <span className="text-teal-400 font-semibold">Aditya</span>, a
            passionate Frontend Developer who loves crafting visually stunning
            and functional web applications. With a strong foundation in{" "}
            <span className="text-teal-400">React.js</span>, I create seamless
            user experiences that bring ideas to life.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            In my journey so far, I’ve built projects like a{" "}
            <span className="text-teal-400 font-semibold">Myntra Clone</span>, a
            <span className="text-teal-400 font-semibold"> Weather App</span>,
            and a <span className="text-teal-400 font-semibold">Todo App</span>.
            I love exploring new technologies and continuously improving my
            skills to stay ahead in the tech world.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            I’m currently diving into backend development using{" "}
            <span className="text-teal-400 font-semibold">JavaScript</span> and
            <span className="text-teal-400 font-semibold">Mongoose</span>,
            aiming to become a well-rounded full-stack developer.
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Beyond coding, I enjoy contributing to open-source projects, sharing
            knowledge through blogs, and engaging with the tech community. My
            hobbies include photography, exploring new places, and experimenting
            with creative designs.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              Education
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-xl">🎓</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Bachelor's Degree in Computer Science Engineering
                    Specialization in Artificial Intelligence & Machine Learning
                  </h4>
                  <p className="text-gray-400 text-sm">
                    MRSPT University, 2023
                  </p>
                  <p className="text-gray-500 text-sm">Location: Pune, India</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">💻</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Certification in User Experience (UX) Design
                  </h4>
                  <p className="text-gray-400 text-sm">UXUI Institute, 2023</p>
                  <p className="text-gray-500 text-sm">
                    Location: Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              Hobbies
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-xl">📷</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Photography
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Capturing beautiful moments and sceneries through my lens.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">🌍</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Exploring New Places
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Traveling to different locations and discovering unique
                    cultures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xl">🎨</span>
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Creative Design
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Experimenting with designs and creating unique visuals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-teal-400 mb-4">
              Location
            </h3>
            <div className="flex items-start gap-4">
              <span className="text-xl">📍</span>
              <div>
                <h4 className="text-lg font-semibold text-white">
                  Current Location
                </h4>
                <p className="text-gray-400 text-sm">
                  Pune, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
          <button
      class="relative inline-block px-8 py-4 text-lg font-semibold tracking-wide text-[#725AC1] border-2 border-[#725AC1] rounded-lg bg-transparent overflow-hidden transition-all duration-300 group"
    >
      <span
        class="absolute inset-0 bg-[#725AC1] -z-10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom"
      ></span>
      <span class="relative z-10 group-hover:text-white transition-colors duration-300">
        Click Me
      </span>
    </button>
            <a
              href="https://linkedin.com/in/your-linkedin" // Replace with your LinkedIn URL
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://your-portfolio.com" // Replace with your Portfolio URL
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white rounded-lg font-medium shadow-md transition-all transform hover:scale-105"
            >
              Visit Portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
