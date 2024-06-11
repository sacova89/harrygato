import React from 'react';
import { Navbar } from "./navbar.jsx";

export const Blog = () => {
    return (
        <div className="min-h-screen bg-red-400">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center text-white mb-8">Blog</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* contenido del blog */}
                    <div className="border p-4 bg-white rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Título del Artículo</h2>
                        <p className="text-gray-700">Contenido del artículo...</p>
                    </div>
                    {/* Más articulos */}
                </div>
            </div>
        </div>
    );
};

export default Blog;
