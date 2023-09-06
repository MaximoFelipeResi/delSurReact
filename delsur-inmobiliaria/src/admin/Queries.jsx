import React from 'react'

import "./admin-css/queries.css"

const Queries = () => {

  return (
    <div className='table-container'>
      <h2 className='heading'>Tabla de Consultas</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Consulta</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">luis1234@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Consulta'>Buenas tardes, me gustaria conocer más detalles de la casa de Adrogue que tienen en venta.</td>
            <td datatype='Delete'>
              <button className="queries-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Consulta'>Buenas tardes, me gustaria conocer más detalles de la casa de Adrogue que tienen en venta.</td>
            <td datatype='Delete'>
              <button className="queries-btn" type='delete'> 
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Consulta'>Hola gente, aguante Lionel Andres Messi Cucittini!!!!!!!!!!!!!!</td>
            <td datatype='Delete'>
              <button className="queries-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Consulta'>Hola gente, aguante Lionel Andres Messi Cucittini!!!!!!!!!!!!!!</td>
            <td datatype='Delete'>
              <button className="queries-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Queries