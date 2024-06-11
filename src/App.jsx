import React, { useState } from 'react';
import { About } from "./components/about.jsx";
import { Footer } from "./components/footer.jsx";
import Portfolio from "./components/portfolio.jsx";
import { Navbar } from "./components/navbar.jsx";
import Profile from "./components/profile.jsx";

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

  return (
    <div>
      <Navbar />
      <About id="about" />
      <Portfolio id="portfolio" onAddToFavorites={handleAddToFavorites} />
      <Profile id="profile" favoriteProjects={favoriteProjects} />
      <Footer id="footer" />
    </div>
  );
}

export default App;
