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
  <div className="contact-header">
    <h2>Contactanos</h2>
    <p>
      Colectora 11444, C.A. El Pato, Berazategui 1893. <br />
      <span>011 5182-2809 | 02229 491725</span>
    </p>
  </div>

  <form onSubmit={Store} method='post' autoComplete='off' className='contact-form'>
    {/* Agrupamos los 3 campos superiores en un grid */}
    <div className='form-grid-top'>
      <div className='form-content'>
        <label className='contact-label' htmlFor="name">Nombre completo</label>
        <input className='contact-input' value={nombre} onChange={(e)=>setNombre(e.target.value)} type="text" id='name' placeholder='Tu nombre' required/>
      </div>

      <div className='form-content'>
        <label className='contact-label' htmlFor="email">Correo</label>
        <input className='contact-input' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" id='email' placeholder='mail@ejemplo.com' required/>
      </div>

      <div className='form-content'>
        <label className='contact-label' htmlFor="phone">Teléfono</label>
        <input className='contact-input' value={numero} onChange={(e)=>setNumero(e.target.value)} type="text" id='phone' placeholder='11 1234-5678' required/>
      </div>
    </div>

    <div className='form-content full-width'>
      <label className='contact-label' htmlFor='message'>Consulta</label>
      <textarea name="message" className='contacto-textarea' value={descripcion} onChange={(e)=>setDescripcion(e.target.value)} id="message" rows="4" placeholder='¿En qué podemos ayudarte?' required></textarea>
    </div>

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