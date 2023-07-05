import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Logo</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      {/* Resto del contenido de la aplicación */}
    </div>
  );
}

export default App;
