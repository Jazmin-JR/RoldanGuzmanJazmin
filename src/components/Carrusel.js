import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Carrusel.css'

// Importar las imágenes
import imagen1 from '../assets/seccion1.webp'; 
import imagen2 from '../assets/seccion2.webp'; 
import imagen3 from '../assets/seccion3.webp'; 

const Carrusel = () => {
  const secciones = [
    {
      title: "Sección 1",
      image: imagen1, 
      link: "/seccion1"
    },
    {
      title: "Sección 2",
      image: imagen2, 
      link: "/seccion2"
    },
    {
      title: "Sección 3",
      image: imagen3, 
      link: "/seccion3"
    },
  ];

  return (
    <div className="row">
      {secciones.map((seccion, index) => (
        <div className="col-md-4 mb-4" key={index}>
          <Link to={seccion.link} className="card-link"> 
            <div className="card position-relative">
              <img src={seccion.image} className="card-img-top" alt={seccion.title} />
              <div className="card-body text-center">
                <h5 className="card-title text-white">{seccion.title}</h5> {/* Título en color blanco */}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Carrusel;
