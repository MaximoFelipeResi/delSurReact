import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {store} from '../redux/store/store'

import Helmet from '../components/Helmet/Helmet.jsx';
import CommonSection from '../components/UI/CommonSection'
import "../styles/contacto.css";



const Contacto = () => {

  
  const endpoint = store.getState().api;
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const Store = async(event)=>{
    event.preventDefault();
    await  axios.post(endpoint + "/Listaqueries",
      {fullname:nombre, number:numero, email:email, descripcion:descripcion});
      navigate('/');
  }

 





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

        <form onSubmit={Store} method='post' autoComplete='off' className='contact-form'>

          <div className='form-group'>

            <div className='form-content'>
              <label className='contact-label' for="name">Nombre completo</label>
              <input className='contact-input'
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              type="text" id='name' name='name' placeholder='Nombre' required/>
            </div>

            <div className='form-content'>
              <label className='contact-label' for="email">Correo</label>
              <input className='contact-input'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              contact-label type="email" id='email' name='email' placeholder='Correo' required/>
            </div>

            <div className='form-content'>
              <label className='contact-label'for="phone">Teléfono</label>
              <input className='contact-input'
              value={numero}
              onChange={(e)=>setNumero(e.target.value)}
              type="text" id='phone' name='phone' placeholder='Telefono' required/>
            </div>
            
          </div>

          <label className='contact-label' for='message'>Consulta</label>
          <textarea name="message" className='contacto-textarea'
          value={descripcion}
          onChange={(e)=>setDescripcion(e.target.value)}
          id="message" cols="30" rows="10" placeholder='Consulta...' required></textarea>

          <button type='submit' className='button-contact'>Enviar Mensaje</button>

        </form>
      </div>
      <div className='button-container'>
                    <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
                        <img className='btn-wsp' src="/images/whatsapp-sticky.png" alt="Whatsapp Del Sur Inmobiliaria" title="Whatsapp Del Sur Inmobiliaria"/>
                    </Link>
                </div>
      </Helmet>
    </div>
  )
}

export default Contacto