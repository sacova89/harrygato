import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const Routes = [
    { name: "About me", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">HarryGato Studio</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`lg:flex lg:space-x-6 items-center ${isOpen ? 'block' : 'hidden'} lg:block`}>
          {Routes.map((route) => (
            <li key={route.name} className="py-2 lg:py-0">
              <a href={route.link} className="block px-3 py-2 rounded hover:bg-sky-700 transition duration-300">{route.name}</a>
            </li>
          ))}
          <li className="py-2 lg:py-0">
            <a href="#footer" className="block px-4 py-2 bg-purple-500 rounded-2xl hover:bg-purple-700 transition duration-300">Buy me a coffee!</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
