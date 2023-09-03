import React from 'react'
import axios from 'axios';
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { store, setAuth } from '../redux/store/store';
import {checkUser} from '../utils/user';

import "../admin/admin-css/allproperties.css"
const endpoint = store.getState().api;

const AllProperties = () => {
  const [properties, setProperties]= useState([]);

  useEffect(()=>{
    checkUser();
    getAllProperties();
  },[])

  const getAllProperties=async()=>{
    const responder = await axios.get(`${endpoint}/addproperties`);
    setProperties(responder.data);
  }
  const deleteProperties = async(id)=>{
    await axios.delete(`${endpoint}/addproperties/${id}`);
    getAllProperties();
  }

  const check = ()=>{
    if(checkUser()){
      return(
        <div className='allproperties-container'>

        <h2>Todas las Propiedades</h2>
        <div className="table-properties">
        <table className='all-table'>
            <thead className='all-thead'>
                <tr className='all-tr'>
                  <th className='all-th'>Imagen</th>
                  <th className='all-th'>Titulo</th>
                  <th className='all-th'>Tipo</th>
                  <th className='all-th'>Precio</th>
                  <th className='all-th'>Accion</th>
                </tr>
            </thead>
            <tbody className='all-tbody'>
              {properties.map((consulta)=>(
                <tr key="">
                <td className='all-td'>
                  <img src="../src/assets/images/casa.jpg" alt="imagen prop" />  {/* como carajo traigo las imagenes */}
                </td>
                <td className='all-td' datatype='titulo'>{consulta.titulo}</td>
                <td className='all-td' datatype='categoria'>{consulta.categoria}</td>
                <td className='all-td'  datatype='precio'>{consulta.precio}</td>
                <td>
                    <button className="all-btn"
                    onClick={()=>deleteProperties(consulta.id)} type='delete'>
                    <i class="fa-regular fa-trash-can"></i>
                    </button>
                </td>
            </tr>

              ))}
                  
            </tbody>
        </table>
        </div>
    </div>
  );
}
else{
  location.href = "/";
}
  }
  return check();
}    
export default AllProperties