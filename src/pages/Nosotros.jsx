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
              Propiedades
            </h2>
            <p className='nosotros-info'>

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
      <div className='button-container'>
              <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
                <img className='btn-wsp' src="/images/whatsapp-sticky.png" alt="Whatsapp Del Sur Inmobiliaria" title="Whatsapp Del Sur Inmobiliaria"/>
              </Link>
            </div>
    </div>
  )
}

export default Nosotros