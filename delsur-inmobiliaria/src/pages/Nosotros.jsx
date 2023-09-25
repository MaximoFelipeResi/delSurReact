import React from 'react'

import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet.jsx';

import "../styles/nosotros.css";

const Nosotros = () => {
  return (
    <div>
      <Helmet title="Nosotros">
        
        <section id='split-screen'>

          <div className="left">
            <h2 className='nosotros-title'>
              <span className='creative'>
                DelSur
              </span> <br />
              Propiedades e Inmuebles
            </h2>
            <p className='nosotros-info'>
            <div className="objetivo">
              Nuestra misión es brindar un servicio profesional y responsable de intermediación en la compra, venta y alquiler de inmuebles, buscando satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus necesidades inmobiliarias específicas, y aportando valor a los inversores en bienes raíces.
            </div>
            <div className="mision">
              Nuestra misión es brindar un servicio profesional y responsable de intermediación en la compra, venta y alquiler de inmuebles, buscando satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus necesidades inmobiliarias específicas, y aportando valor a los inversores en  bienes raíces.
            </div>
            <div className="valores">
            Nuestros valores son: <br />  
            • Compromiso <br />
            • Integridad <br />
            • Profesionalismo
            </div>
            </p>
          </div>
            
          <div className="right">
            <h2 className='title-aboutus'>Nosotros</h2>
          </div>

        </section>
      </Helmet>
    </div>
  )
}

export default Nosotros