import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { store, setAuth } from '../redux/store/store';
import {checkUser} from '../utils/user';

import "./admin-css/appraisals.css";
const endpoint = store.getState().api; 
const Appraisals = (props) => {
  const navigate = useNavigate();

  const [tasaciones, setTasaciones] = useState([]);

  useEffect(()=>{
    checkUser();
    getAllTasaciones();
  },[])

  const getAllTasaciones=async()=>{
    const responder =await axios.get(`${endpoint}/addtasaciones`);
    setTasaciones(responder.data);

  }
  const deleteTasaciones=async(id)=>{
    await axios.delete(`${endpoint}/addtasacion/${id}`);
    getAllTasaciones(); 

  }

  function parseOperacion(num) {
    switch (parseInt(num)) {
      case 0:
        return "Venta";
        break;

      case 1:
        return "Alquiler";
        break;

      default:
        break;
    }
  }

  function parseCategoria(num) {
    switch (parseInt(num)) {
      case 0:
        return "Casa";
        break;

      case 1:
        return "Lote";
        break;
      case 2:
        return "Quinta";
        break;
      case 3:
        return "Campo";
        break;

      case 4:
        return "Departamento";
        break;

      case 5:
        return "Local";
        break;

      case 6:
        return "Cochera";
        break;

      default:
        break;
    }
  }
  

  const check = () => {
    if(checkUser()) {
      return (
<div className='table-container'>
      <h2 className='heading'>Tabla de Tasaciones</h2>
      <table className="table">
        <thead className='thead-appraisals'>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Horario de contacto</th>
            <th>Dirección</th>
            <th>Operación</th>
            <th>Tipo de propiedad</th>
            <th>Ambientes</th>
            <th>Garaje</th>
            <th>Sup.cubierta</th>
            <th>Sup. total</th>
            <th>Extra</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {tasaciones.map((consulta)=>(
            <tr key={consulta.id}>
            <td datatype="Id">{consulta.id}</td>
            <td datatype="Name">{consulta.name}</td>
            <td datatype="Email">{consulta.email}</td>
            <td datatype='Telefono'>{consulta.number}</td>
            <td datatype='Horario de contacto'>{consulta.horario}</td>
            <td datatype='Direccion'>{consulta.direccion}</td>
            <td datatype='Operacion'>{parseOperacion(consulta.operacion)}</td>
            <td datatype='Tipo de propiedad'>{parseCategoria(consulta.tipoPropiedad)}</td>
            <td datatype='Ambientes'>{consulta.ambiantes}</td>
            <td datatype='Garage'>{consulta.garage}</td>
            <td datatype='Sup. cubierta (m2)'>{consulta.supCubiertam2}</td>
            <td datatype='Sup. total (m2)'>{consulta.supTotalm2}</td>
            <td datatype='Extra'>{consulta.extra}</td>
            <td datatype='Delete'>
              <button className="appraisals-btn" onClick={()=>deleteTasaciones(consulta.id)} type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          ))}

        </tbody>
      </table>
    </div>
      );
    }
    else {
      location.href = "/";
    }
  }

  return check();
}

export default Appraisals