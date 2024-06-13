import React, { useState, useEffect } from 'react';
import projectsData from '../data.json';

const Portfolio = ({ onAddToFavorites }) => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData.projects);
  }, []);

  return (
    <div id="portfolio" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <h2 className="text-4xl font-bold text-center text-white mt-6">PORTAFOLIO</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 w-full max-w-6xl">
        {projects.map(project => (
          <div key={project.id} className="border p-4 bg-white rounded-lg shadow-md">
            {/* Imagen del proyecto */}
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <button
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
              onClick={() => onAddToFavorites(project)}
            >
              Añadir a Favoritos
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
