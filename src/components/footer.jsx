import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Footer = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [subscriberCount, setSubscriberCount] = useState(0); // contador de suscriptores

  useEffect(() => {
    
    const fetchSubscriberCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/subscription/count');
        setSubscriberCount(response.data.count);
      } catch (error) {
        console.error('Error fetching subscriber count:', error);
      }
    };

    fetchSubscriberCount();
  }, []); 

  const handleSubscribe = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/subscription/subscribe', { name, phone, email });
      setSubscribed(true);
      setCurrentId(response.data._id);
      setSubscriberCount(prevCount => prevCount + 1); // contador de suscriptores
    } catch (error) {
      console.error('Error subscribing:', error);
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    try {
      // Verificar suscripción actual
      if (!currentId) {
        console.error('No current subscription ID found');
        return;
      }

      await axios.delete(`http://localhost:5000/api/subscription/unsubscribe/${currentId}`, {
        data: { name, phone, email } 
      });

      // Resetear formulario
      setName('');
      setPhone('');
      setEmail('');
      setSubscribed(false);
      setCurrentId(null);
      setSubscriberCount(prevCount => prevCount - 1); 
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  return (
    <div id="footer" className="bg-gray-800 text-white py-6 px-4 md:px-8 lg:px-16">
      <div className="text-center">
        <p className="mb-2">Contacto: diproyectoscom@gmail.com</p>
        <p className="mb-4">Redes Sociales</p>
      </div>
      <div className="max-w-md mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-center">Suscríbete</h3>
        <form className="space-y-4">
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
            <label htmlFor="phone" className="block mb-1">Teléfono:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1">Correo:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-200"
            onClick={handleSubscribe}
            disabled={subscribed}
          >
            Suscribirte
          </button>
          <button
            className="w-full bg-red-500 hover:bg-red-700 text-white font-semibold py-2 rounded-md transition duration-200"
            onClick={handleUnsubscribe}
            disabled={!subscribed}
          >
            Eliminar suscripción
          </button>
        </form>
        <div className="mt-4 text-center text-gray-300">
          Suscriptores actuales: {subscriberCount}
        </div>
      </div>
    </div>
  );
};
