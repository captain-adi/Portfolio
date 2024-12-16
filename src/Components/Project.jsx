import React from "react";
import { projects } from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";

const Project = () => {

  return (
    <section className="bg-black h-full text-white py-12 xl:h-screen">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
         <Link to={project.projectLink}><div key={project.id} className="relative group overflow-hidden rounded-lg">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-500 sm:h-96"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90 group-hover:opacity-100 transition duration-300"></div>
            {/* Project Content */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-lg font-bold text-green-400">{project.category}</h3>
              <h2 className="text-2xl font-extrabold">{project.title}</h2>
            </div>
          </div></Link> 
        ))}
      </div>
      
    </section>
  );
};

export default Project;
