import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {store, setAuth} from '../redux/store/store'
import {checkUser} from '../utils/user';


import "./admin-css/queries.css"
import { propNames } from '@chakra-ui/react'

const endpoint = store.getState().api;
const Queries = (props) => {
  
  const navigate = useNavigate(); 
  const [consultas, setConsultas]= useState([]);
  useEffect(()=>{
    checkUser();
    getAllConsultas();
  },[]) 

  const getAllConsultas = async ()=>{
    const responder = await axios.get(`${endpoint}/queries`)
    setConsultas(responder.data);
  }

  const deleteConsultas = async(id)=>{
    await axios.delete(`${endpoint}/queries/${id}`);
    getAllConsultas();

  }

    const check = () => {
      if(checkUser()) {
        return (
          <div className='table-container'>
      <h2 className='heading'>Tabla de Consultas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>ID-Prop</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Consulta</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta)=>(
            <tr key={consulta.id}>
            <td datatype="Id">{consulta.id}</td>
            <td datatype="Id-Prop">{consulta.IDProp}</td>
            <td datatype="Name">{consulta.fullname}</td>
            <td datatype="Email">{consulta.email}</td>
            <td datatype='Telefono'>{consulta.number}</td>
            <td datatype='Consulta'>{consulta.descripcion}</td>
            <td datatype='Delete'>
              <button className="queries-btn" onClick={()=>deleteConsultas(consulta.id)} type='delete'>
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

export default Queries