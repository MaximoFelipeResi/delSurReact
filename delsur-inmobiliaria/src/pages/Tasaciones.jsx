import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { store } from '../redux/store/store'

import "../styles/tasaciones.css"

const Tasaciones = () => {

  const endpoint = store.getState().api;

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [horario, setHorario] = useState('');
  const [direccion, setDireccion] = useState('');
  const [operacion, setOperacion] = useState('');
  const [tipopropiedad, setTipoPropiedad] = useState('');
  const [ambiantes, setAmbiantes] = useState('');
  const [supcubierta, setSupCubierta] = useState('');
  const [suptotal, setSupTotal] = useState('');
  const [garage, setGarage] = useState('');
  const [extra, setExtra] = useState('');
  const navigate  = useNavigate();

  const Store = async(event)=>{
    event.preventDefault();
    await axios.post(endpoint + "/listTasacion",
      { name:nombre, email:email, number:numero, horario:horario,
        direccion:direccion, operacion:operacion, tipoPropiedad:tipopropiedad,
        ambiantes:ambiantes, supCubiertam2:supcubierta, supTotalm2:suptotal,
        garage:garage, extra:extra
      });
      navigate('/');
  }





  return (
    <div className='tasaciones-container'>

      <div className="div-tsc">
      
        <h2 className='title-tasaciones'>Tasaciones
        <p>¿Quieres vender o alquilar tu propiedad? <br />
        Completa el formulario y nos contactaremos para asesorarte.</p>
        </h2>

        <form onSubmit={Store} action="" className='tasaciones-form'>

          <div className='datos-box'>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Nombre</label>
              <input
              value={nombre}
              onChange={(e)=>setNombre(e.target.value)}
              className='input-tsc' type="name" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Email</label>
              <input
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className='input-tsc' type="email" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Teléfono</label>
              <input
              value={numero}
              onChange={(e)=>setNumero(e.target.value)}
              className='input-tsc' type="text" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Horario de contacto</label>
              <input
              value={horario}
              onChange={(e)=>setHorario(e.target.value)}
              className='input-tsc' type="time" required/>
            </div>

          </div>
            
          <div className='prop-box'>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Dirección de la propiedad</label>
              <input
              value={direccion}
              onChange={(e)=>setDireccion(e.target.value)}
              className='input-tsc' type="text" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Operación</label>
              <select
              value={operacion}
              onChange={(e)=>setOperacion(e.target.value)}
              className='select-tasaciones'>
                <option value="select">seleccione</option>
                <option value='0'>Venta</option>
                <option value='1'>Alquiler</option>
              </select>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Tipo de propiedad</label>
              <select
              value={tipopropiedad}
              onChange={(e)=>setTipoPropiedad(e.target.value)}// REVISAR
              className='select-tasaciones'>
                <option value="select">seleccione</option>
                <option value= '0' >Casa</option>
                <option value= '1' >Lote</option>
                <option value="2">Quinta</option>
                <option value="3">Campo</option>
                <option value="4">Departamento</option>
                <option value="5">Local</option>
                <option value="6">Cochera</option>
              </select>
            </div>
            
            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Ambientes</label>
              <select
              value={ambiantes}
              onChange={(e)=>setAmbiantes(e.target.value)}// REVISAR
              className='select-tasaciones'>
                <option value="select">seleccione</option>
                <option value="0">1</option>
                <option value="1">2</option>
                <option value='2'>3</option>
                <option value="3">4</option>
                <option value="4">5 o más</option>
              </select>
            </div>

          </div>

          <div className="extra-box">

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Superficie cubierta (en m2)</label>
              <input
              value={supcubierta}
              onChange={(e)=>setSupCubierta(e.target.value)}
              className='input-tsc' type="number" required/>
            </div>
            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Superficie total (en m2)</label>
              <input
              value={suptotal}
              onChange={(e)=>setSupTotal(e.target.value)}
              className='input-tsc' type="number" required/>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Garage</label>
              <select
              value={garage}
              onChange={(e)=>setGarage(e.target.value)}
              className='select-tasaciones'>
                <option value="select">seleccione</option>
                <option value="0">No</option>
                <option value="1">Si</option>
              </select>
            </div>

            <div className="tsc-box">
              <label className='label-tsc' htmlFor="">Extras</label>
              <textarea
              value={extra}
              onChange={(e)=>setExtra(e.target.value)}
              className='textarea-tasaciones' id="" cols="30" rows="6">Amenities, dormitorios, baños...</textarea>
            </div>

          </div>
          
          <div className='button__container'>
            <button type='submit' className='button-contact' id='info-btn'>Enviar</button>
          </div>
        </form>
       
      </div>

    </div>
  )
}

export default Tasaciones