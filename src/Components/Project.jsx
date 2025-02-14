import React from "react";
import { projects } from "../ProjectData/ProjectData";
import { Link } from "react-router-dom";
import Squares from "./Squares";

const Project = () => {

  return (
    <>
    <div className="relative h-screen overflow-hidden w-full">
    <Squares
        speed={0.3}
        size={10} // pixels
        direction="left" // up, down, left, right, diagonal
        borderColor="#fff"
        hoverFillColor="#222"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

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
              <h3 className="text-lg font-bold ">{project.category}</h3>
              <h2 className="text-2xl font-extrabold text-green-400">{project.title}</h2>
            </div>
          </div></Link> 
        ))}
      </div>
      
    </section>
    </div>
    
    </>
  );
};

export default Project;
