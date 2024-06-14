import React from 'react';

export const About = () => {
  return (
    <div 
      id="about" 
      className="flex flex-col justify-center min-h-[50vh] md:min-h-[70vh] lg:min-h-[90vh] bg-pattern-about"
    >
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
          Bienvenido a
          <div className="text-5xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
              HarryGato Studio
            </span>
          </div>
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center text-white">
          Soy un diseñador industrial y este es mi trabajo.
        </p>
      </div>
    </div>
  );
};
