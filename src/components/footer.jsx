import React, { useState } from 'react';

export const Footer = () => {
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías manejar el envío del formulario, como redirigir a la página de Buy Me a Coffee
        //const buyMeACoffeeUrl = `https://www.buymeacoffee.com/yourusername?name=${encodeURIComponent(name)}&message=${encodeURIComponent(message)}&amount=${amount}`;
        //window.location.href = buyMeACoffeeUrl;
        console.log('***** subscribe')
    };

    return (
        <div id="footer" className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-16">
            <div className="text-center">
                <p className="mb-2">Contacto: diproyectoscom@gmail.com</p>
                <p className="mb-4">Redes Sociales</p>
            </div>
            <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4 text-center">¿Quieres comprarme un café?</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-1">Nombre:</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block mb-1">Mensaje:</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="amount" className="block mb-1">Cantidad (USD):</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200">Enviar</button>
                </form>
            </div>
        </div>
    );
};
