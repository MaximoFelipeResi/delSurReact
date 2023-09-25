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
  function parseOperacion(num) {
    switch (num) {
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
    switch (num) {
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


  const check = ()=>{
    if(checkUser()){
      return(
        <div className='allproperties-container'>

        <h2 className='title-featuredprop'>Todas las Propiedades</h2>
        <div className="table-properties">
        <table className='all-table'>
            <thead className='all-thead'>
                <tr className='all-tr'>
                  <th className='all-th'>Titulo</th>
                  <th className='all-th'>Operacion</th>
                  <th className='all-th'>Tipo</th>
                  <th className='all-th'>Precio</th>
                  <th className='all-th'>Acción</th>
                </tr>
            </thead>
            <tbody className='all-tbody'>
              {properties.map((consulta)=>(
                <tr key="">
                <td className='all-td' datatype='titulo'>{consulta.titulo}</td>
                <td className='all-td' datatype='operacion'>{parseOperacion(consulta.operacion)}</td>
                <td className='all-td' datatype='categoria'>{parseCategoria(consulta.categoria)}</td>
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