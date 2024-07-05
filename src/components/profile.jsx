import React from 'react';

const Profile = ({ favoriteProjects, onDeleteFavorite }) => {

  const handleDownloadImage = (imageUrl, imageName) => {
    const downloadLink = document.createElement('a');
    downloadLink.href = imageUrl;
    downloadLink.download = imageName;
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  const handleDelete = (projectId) => {
    onDeleteFavorite(projectId);
  };

  return (
    <section id="profile" className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <h2 className="text-3xl font-bold text-white text-center">MIS FAVORITOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 p-4 w-full max-w-6xl">
        {favoriteProjects.map(project => (
          <div key={project._id} className="rounded-md border p-4 bg-white ">
            <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">{project.name}</h3>
            <p>{project.description}</p>
            <div className="flex justify-between items-center mt-4">
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 " 
                onClick={() => handleDownloadImage(project.image, `${project.name}.jpg`)}> 
                Descargar
              </button>
              <span
                className="text-red-500 cursor-pointer hover:underline"
                onClick={() => handleDelete(project._id)}>
                Eliminar
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Profile;
