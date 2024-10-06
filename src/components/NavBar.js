import React, { useState } from 'react';
import { FaStar, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import userProfilePic from '../assets/jrg-perf.png';
import '../css/NavBar.css'; // Asegúrate de importar el archivo CSS

const NavBar = () => {
  const [showProfilePic, setShowProfilePic] = useState(false);

  // Función para alternar la visibilidad de la imagen
  const handleProfileClick = () => {
    setShowProfilePic(!showProfilePic);
  };

  return (
    <>
      <div className="navbar-container d-flex justify-content-between align-items-center p-3 bg-light fixed-top">
        <div className="left">
          <FaStar style={{ marginRight: '10px' }} />
          <span>ALUMN@: ROLDÁN GUZMÁN JAZMÍN</span>
        </div>
        <div className="right d-flex align-items-center">
          <Link to="/seccion1" className="btn btn-custom mx-2">Sección 1</Link>
          <Link to="/seccion2" className="btn btn-custom mx-2">Sección 2</Link>
          <Link to="/seccion3" className="btn btn-custom mx-2">Sección 3</Link>
          <Link to="/" className="btn btn-home mx-2">
            <FaHome />
          </Link>
          {/* Imagen del perfil */}
          <img
            src={userProfilePic}
            alt="Perfil"
            className="rounded-circle"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            onClick={handleProfileClick}
          />
        </div>
      </div>

      {/* Mostrar la foto en pantalla si el estado está activo */}
      {showProfilePic && (
        <div className="profile-pic-modal d-flex justify-content-center align-items-center" style={modalStyles}>
          <img
            src={userProfilePic}
            alt="Foto de perfil"
            style={{ width: '200px', height: '200px', borderRadius: '50%' }}
          />
        </div>
      )}
    </>
  );
};

// Estilos inline para la imagen modal
const modalStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 999
};

export default NavBar;
