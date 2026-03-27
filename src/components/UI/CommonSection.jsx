import React, { useState, useEffect } from 'react';
import '../../styles/common-section.css';

const Hero = ({ title }) => {
  const words = ["Prestigio.", "Estilo.", "Confianza.", "Calidad."];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
  Tu Próximo Hogar Comienza con 
  <span className="word-wrapper">
    &nbsp;
    <span className="highlight animate-pop" key={words[index]}>
      {words[index]}
    </span>
  </span>
</h1>
          <p className="hero-subtitle">
            En Del Sur Inmobiliaria, conectamos tus sueños con las mejores propiedades. 
            Tasaciones profesionales y asesoramiento personalizado en cada paso.
          </p>
          
          {/* Barra de ubicación simple */}
          <div className="hero-search-bar">
            <div className="search-input-group">
              <span className="search-icon">📍</span>
              <span className="section-path">
                Sección de <span className="highlight">{title}</span>
              </span>
            </div>
          </div>

          <div className="hero-cta-group">
            <button className="btn-primary">
              <a className="sub-links" href="/propiedades">Ver Propiedades</a>
            </button>
            <br/>
            <button className="btn-secondary">
              <a className="sub-links" href="/tasaciones">Tasar Propiedad</a>
            </button>
          </div>
        </div>

        <div className="hero-visual">
  {/* Las badges ahora son hermanas del wrapper, no hijas */}
  <div className="badge badge-top">
    <span className="badge-icon">🏠</span>
    <div className="badge-text">
      <strong>+100</strong>
      <span>Propiedades</span>
    </div>
  </div>

  <div className="image-wrapper">
    <img src="/images/shaking-new.jpeg" className="main-hero-img" alt="Hero" />
  </div>

  <div className="badge badge-bottom">
    <span className="badge-icon">⭐</span>
    <div className="badge-text">
      <strong>Prestigio</strong>
      <span>Profesional</span>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default Hero;