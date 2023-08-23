import React from 'react'

import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet.jsx';
import CommonSection from '../components/UI/CommonSection';

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
            <p className='nosotros-info'>Nuestra misión es brindar un servicio profesional y responsable de     intermediación en la compra, venta y alquiler de inmuebles, buscando satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus necesidades inmobiliarias específicas, y aportando valor a los inversores en bienes raíces.
            <br /><br />
            Nuestra misión es brindar un servicio profesional y responsable de     intermediación en la compra, venta y alquiler de inmuebles, buscando satisfacer al cliente atendiendo, comprendiendo y trabajando sobre sus necesidades inmobiliarias específicas, y aportando valor a los inversores en bienes raíces.
            <br /> <br />
            Nuestros valores son: <br />  
            • Compromiso <br />
            • Integridad <br />
            • Profesionalismo
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