import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const Routes = [
    { name: "About me", link: "/#about" },
    { name: "Portfolio", link: "/#portfolio" },
    { name: "Blog", link: "/blog" },
  ];

  const handleLinkClick = (link) => {
    setIsOpen(false); // Cerrar el menú cuando se hace clic en un enlace
    if (link.startsWith('#')) {
      // Manejar enlaces internos con scroll suave
      const element = document.querySelector(link);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Para enlaces externos, redirigir a la URL completa
      window.location.href = link;
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">HarryGato Studio</div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none relative z-50">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <ul className={`fixed inset-0 bg-gray-800 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-6 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:relative lg:flex lg:flex-row lg:space-x-6 lg:translate-x-0 lg:space-y-0 lg:bg-transparent lg:bg-opacity-100 lg:inset-auto lg:justify-end`}>
          {Routes.map((route) => (
            <li key={route.name} className="py-2 lg:py-0">
              <a
                href={route.link}
                className="block px-3 py-2 rounded hover:bg-sky-700 transition duration-300"
                onClick={() => handleLinkClick(route.link)}
              >
                {route.name}
              </a>
            </li>
          ))}
          <li className="py-2 lg:py-0">
            <a
              href="#footer"
              className="block px-4 py-2 bg-purple-500 rounded-2xl hover:bg-purple-700 transition duration-300"
              onClick={() => handleLinkClick('/#footer')}
            >
              Buy me a coffee!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
