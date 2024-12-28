import React from "react";
import Squares from "./Squares";

const Skills = () => {
  const skills = [
    {
      title: "Frontend Development",
      description:
        "Specialized in building visually appealing, responsive user interfaces with modern frameworks and tools.",
      tags: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "Styled Component",
      ],
    },
    {
      title: "Backend Development",
      description:
        "Experience with server-side development, API creation, and database management using modern technologies.",
      tags: ["Node.js", "Express", "MongoDB", "Mongoose"],
    },
    {
      title: "Tools & Others",
      description:
        "Familiar with development workflows, cloud platforms, and agile processes for efficient software delivery.",
      tags: ["Git", "Figma"],
    },
  ];

  return (
    <div className="relative overflow-hidden w-full">
      <Squares
        speed={0.3}
        size={10} // pixels
        direction="up" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />
      <section className="h-full flex items-center text-white py-10 px-5">
        <div className="container z-10 mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 text-white">
            Technical Skills
          </h2>
          <div className="flex flex-col gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-10 rounded-lg shadow-lg hover:shadow-2xl transition-shadow w-full sm:py-14"
              >
                <h3 className="text-3xl font-semibold mb-4 text-white">
                  {skill.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {skill.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skill.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-gray-700 text-green-300 px-5 py-3 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
