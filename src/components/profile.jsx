import React from 'react';

const Profile = ({ favoriteProjects }) => {
  return (
    <section id="profile" className="py-52">
      <h2 className="text-3xl font-bold text-center">Mis Favoritos</h2>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {favoriteProjects.map(project => (
          <div key={project.id} className="border p-4">
            <h3 className="text-xl">{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profile;
