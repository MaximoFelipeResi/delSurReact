import React from 'react'
import { Link } from 'react-router-dom';

import Helmet from '../components/Helmet/Helmet.jsx';
import CommonSection from '../components/UI/CommonSection'

import "../styles/contacto.css";

const Contacto = () => {
  return (
    <div>
      <Helmet title='Contacto'>
      <CommonSection title="Contacto"/>
      <div className='form-container'>
        <h2>Contactanos</h2>
        <p>
          Encontranos: Colectora 11457, El Pato, Berazategui, Buenos Aires.
          <br />
          011 5182-2809
          <br />
          02229 491725
        </p>

        <form method='post' autoComplete='off' className='contact-form'>

          <div className='form-group'>

            <div className='form-content'>
              <label className='contact-label' for="name">Nombre</label>
              <input className='contact-input' type="text" id='name' name='name' placeholder='Nombre' required/>
            </div>

            <div className='form-content'>
              <label className='contact-label' for="email">Correo</label>
              <input className='contact-input' contact-label type="email" id='email' name='email' placeholder='Correo' required/>
            </div>

            <div className='form-content'>
              <label className='contact-label'for="phone">Telefono</label>
              <input className='contact-input' type="tel" id='phone' name='phone' placeholder='Telefono' required/>
            </div>
            
          </div>

          <label className='contact-label' for='message'>Consulta</label>
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Consulta...' required></textarea>

          <button type='submit' className='button-contact'>Enviar Mensaje</button>

        </form>
      </div>
      <div className='button-container'>
                    <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
                        <img className='btn-wsp' src="../src/assets/images/whatsapp-sticky.png" alt="Clickea aquí para contactarnos" />
                    </Link>
                </div>
      </Helmet>
    </div>
  )
}

export default Contacto