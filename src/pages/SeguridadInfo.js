import React from 'react';
import { Link } from 'react-router-dom';
import Carrusel from '../components/Carrusel';
import seguridadImg from '../assets/KM3D.png';  // Asegúrate de que la ruta de la imagen sea correcta

const SeguridadInfo = () => {
  return (
    <div className="container" style={{ marginTop: '170px' }}> {/* Ajustar el margen superior */}
      <h1 className="text-start" 
      style={{ marginLeft: '100px' }}>Seguridad de la Información</h1>
      <div className="row mt-4">
        <div className="col-md-8">
          <p>
            La <strong>seguridad de la información</strong> se define como el conjunto de prácticas, políticas y tecnologías
            diseñadas para proteger la confidencialidad, integridad y disponibilidad de la información. Esto implica salvaguardar
            los datos contra accesos no autorizados, alteraciones, destrucción o interrupciones en su acceso. La seguridad de la 
            información abarca tanto aspectos técnicos, como el uso de cifrado y firewalls, como aspectos humanos, incluyendo la 
            capacitación y concienciación de los usuarios sobre riesgos y buenas prácticas. En un entorno digital cada vez más 
            complejo, la seguridad de la información es fundamental para proteger tanto los datos personales como los empresariales 
            frente a amenazas cibernéticas.
          </p>
          {/* Centrar el botón */}
          <div className="text-center mt-3">
            <Link to="/detalle-seguridad" className="btn btn-primary">
              Más información
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <img 
            src={seguridadImg} 
            alt="Seguridad" 
            className="img-fluid img-grande" 
            style={{ width: '100%', height: 'auto', marginTop: '-80px' }}
          />
        </div>
      </div>
      <div className="mt-5">
        <Carrusel />
      </div>
      <footer>
        <p>&copy; 2024 Seguridad de la Información </p>
        <p>&copy; 2024 Roldán Guzmán Jazmín </p>
      </footer>
    </div>
  );
};

export default SeguridadInfo;
