import React from 'react';

export const ErrorPage = () => {
  return (
    <div
      className="flex flex-col justify-center min-h-[50vh] md:min-h-[70vh] lg:min-h-[100vh] bg-pattern-about">
      <div className="max-w-5xl mx-auto p-6">
        <h1 className="text-5xl md:text-5xl lg:text-9xl font-bold text-center text-white">
          404
          <div className="text-5xl font-extrabold ...">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300">
            PAGINA NO ENCONTRADA
            </span>
          </div>
        </h1>
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center text-white">
          Soy un diseñador y este es mi trabajo.
        </p>
        <p className="mt-4 text-lg md:text-xl lg:text-3xl text-center text-white">
          <a href="/" className="underline text-yellow-500 hover:text-yellow-700">
            Volver al inicio
          </a>
        </p>
      </div>
    </div>
  );
};
