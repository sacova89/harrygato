import React from 'react';

export const About = () => {
  return (
    <div id="about" className="flex flex-col justify-center min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white">
          Bienvenido a HarryGato Studio
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center text-white">
          Soy un diseñador industrial y este es mi trabajo.
        </p>
      </div>
    </div>
  );
};
