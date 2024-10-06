// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SeguridadInfo from './pages/SeguridadInfo';
import DetalleSeguridad from './pages/DetalleSeguridad';
import SeccionUno from './pages/SeccionUno';
import SeccionDos from './pages/SeccionDos';
import SeccionTres from './pages/SeccionTres';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <div>
        {/* Envuelve las rutas con Routes */}
        <Routes>
          {/* Define las rutas con Route */}
          <Route path="/" element={<SeguridadInfo />} />
          <Route path="/detalle-seguridad" element={<DetalleSeguridad />} />
          <Route path="/seccion1" element={<SeccionUno />} />
          <Route path="/seccion2" element={<SeccionDos />} />
          <Route path="/seccion3" element={<SeccionTres />} />
        </Routes>
        <NavBar />
      </div>
    </Router>
  );
}

export default App;
