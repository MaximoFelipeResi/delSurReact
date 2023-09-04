import React from 'react'

import Helmet from '../components/Helmet/Helmet.jsx';

import "../styles/tasaciones.css"

const Tasaciones = () => {
  return (
    <Helmet title="Tasaciones">
    <div className='tasaciones-container'>

      <div className="div-tsc">
      
        <h2 className='title-tasaciones'>Tasaciones
        <p>¿Quieres vender o alquilar tu propiedad? <br />
        Completa el formulario y nos contactaremos para asesorarte.</p>
        </h2>

        <form action="" className='tasaciones-form'>

          <div className='datos-box'>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Nombre Completo</label>
              <input className='input-tsc' type="name" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Email</label>
              <input className='input-tsc' type="email" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Teléfono</label>
              <input className='input-tsc' type="tel" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Horario de contacto</label>
              <input className='input-tsc' type="time" required/>
            </div>

          </div>
            
          <div className='prop-box'>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Dirección de la propiedad</label>
              <input className='input-tsc' type="text" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Operación</label>
              <select className='select-tasaciones'>
                <option value="">Venta</option>
                <option value="">Alquiler</option>
              </select>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Tipo de propiedad</label>
              <select className='select-tasaciones'>
                <option value="">Casa</option>
                <option value="">Lote</option>
                <option value="">Quinta</option>
                <option value="">Campo</option>
                <option value="">Departamento</option>
                <option value="">Local</option>
                <option value="">Cochera</option>
              </select>
            </div>
            
            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Ambientes</label>
              <select className='select-tasaciones'>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
                <option value="">5 o más</option>
              </select>
            </div>

          </div>

          <div className="extra-box">

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Superficie cubierta (en m2)</label>
              <input className='input-tsc' type="number" required/>
            </div>
            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Superficie total (en m2)</label>
              <input className='input-tsc' type="number" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Garage</label>
              <select className='select-tasaciones'>
                <option value="">No</option>
                <option value="">Si</option>
              </select>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Extras</label>
              <textarea className='textarea-tasaciones' id="" cols="28" rows="5">Amenities, dormitorios, baños...</textarea>
            </div>

          </div>

          <div className='button__container'>
            <button type='submit' className='button-contact' id='info-btn'>Enviar</button>
          </div>

        </form>
       
      </div>

    </div>
    </Helmet>
  )
}

export default Tasaciones