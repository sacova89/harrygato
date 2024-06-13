import React, { useState } from 'react';
import { About } from "./components/about.jsx";
import { Footer } from "./components/footer.jsx";
import Portfolio from "./components/portfolio.jsx";
import { Navbar } from "./components/navbar.jsx";
import Profile from "./components/profile.jsx";
import Blog from "./components/blog.jsx";
import projectsData from './data.json'; // Ajusta la ruta según sea necesario

function App() {
  const [favoriteProjects, setFavoriteProjects] = useState([]);

  const handleAddToFavorites = (project) => {
    setFavoriteProjects((prevFavorites) => {
      if (!prevFavorites.some(fav => fav.id === project.id)) {
        return [...prevFavorites, project];
      }
      return prevFavorites;
    });
  };

  const handleDeleteFavorite = (projectId) => {
    const updatedFavorites = favoriteProjects.filter(project => project.id !== projectId);
    setFavoriteProjects(updatedFavorites);
  };

  return (
    <div>
      <Navbar />
      <About id="about" />
      <Portfolio id="portfolio" onAddToFavorites={handleAddToFavorites} />
      <Profile id="profile" favoriteProjects={favoriteProjects} onDeleteFavorite={handleDeleteFavorite} />
      <Footer id="footer" />
    </div>
  );
}

export default App;
