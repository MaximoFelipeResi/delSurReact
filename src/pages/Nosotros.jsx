import React from 'react';
import Helmet from '../components/Helmet/Helmet.jsx';
import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <Helmet title="Nosotros">
      <section className='about-container'>
        <div className="about-content">
          
          <div className="about-left">
            <h2 className='about-title'>
              <span className='brand-accent'>Del Sur</span> <br />
              Inmobiliaria
            </h2>
            
            <div className='about-text'>
              <div className="text-block">
                <h3>Nuestra Misión</h3>
                <p>Brindar un servicio profesional y responsable de intermediación, buscando satisfacer a cada cliente comprendiendo sus necesidades específicas y aportando valor real en cada operación.</p>
              </div>

              <div className="text-block">
                <h3>Nuestros Valores</h3>
                <ul className="values-list">
                  <li><span>•</span> Compromiso</li>
                  <li><span>•</span> Integridad</li>
                  <li><span>•</span> Profesionalismo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="image-frame">
              <img src="/images/nosotros-imagen.jpg" alt="Equipo Del Sur" />
              <div className="experience-badge">
                <strong>25+</strong>
                <span>Años de Experiencia</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Helmet>
  );
}

export default Nosotros;