import React from 'react'

import "./admin-css/appraisals.css";

const Appraisals = () => {

  return (
    <div className='table-container'>
      <h2 className='heading'>Tabla de Tasaciones</h2>
      <table className="table">
        <thead className='thead-appraisals'>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Horario de contacto</th>
            <th>Direccion</th>
            <th>Operación</th>
            <th>Tipo de propiedad</th>
            <th>Ambientes</th>
            <th>Garage</th>
            <th>Sup.cubierta</th>
            <th>Sup. total</th>
            <th>Extra</th>
            <th>Borrar</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Horario de contacto'>09:12</td>
            <td datatype='Direccion'>Bynnon 3150</td>
            <td datatype='Operacion'>Venta</td>
            <td datatype='Tipo de propiedad'>Departamento</td>
            <td datatype='Ambientes'>3</td>
            <td datatype='Garage'>Si</td>
            <td datatype='Sup. cubierta (m2)'>50</td>
            <td datatype='Sup. total (m2)'>120</td>
            <td datatype='Extra'>Esta casa tiene 2 baños, 3 dormitorios y los siguientes amenities...</td>
            <td datatype='Delete'>
              <button className="appraisals-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Horario de contacto'>09:12</td>
            <td datatype='Direccion'>Bynnon 3150</td>
            <td datatype='Operacion'>Venta</td>
            <td datatype='Tipo de propiedad'>Departamento</td>
            <td datatype='Ambientes'>3</td>
            <td datatype='Garage'>Si</td>
            <td datatype='Sup. cubierta (m2)'>50</td>
            <td datatype='Sup. total (m2)'>120</td>
            <td datatype='Extra'>Esta casa tiene 2 baños, 3 dormitorios y los siguientes amenities...</td>
            <td datatype='Delete'>
              <button className="appraisals-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Horario de contacto'>09:12</td>
            <td datatype='Direccion'>Bynnon 3150</td>
            <td datatype='Operacion'>Venta</td>
            <td datatype='Tipo de propiedad'>Departamento</td>
            <td datatype='Ambientes'>3</td>
            <td datatype='Garage'>Si</td>
            <td datatype='Sup. cubierta (m2)'>50</td>
            <td datatype='Sup. total (m2)'>120</td>
            <td datatype='Extra'>Esta casa tiene 2 baños, 3 dormitorios y los siguientes amenities...</td>
            <td datatype='Delete'>
              <button className="appraisals-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td datatype="Name">Luis</td>
            <td datatype="Email">lui@gmail.com</td>
            <td datatype='Telefono'>11 5263-9852</td>
            <td datatype='Horario de contacto'>09:12</td>
            <td datatype='Direccion'>Bynnon 3150</td>
            <td datatype='Operacion'>Venta</td>
            <td datatype='Tipo de propiedad'>Departamento</td>
            <td datatype='Ambientes'>3</td>
            <td datatype='Garage'>Si</td>
            <td datatype='Sup. cubierta (m2)'>50</td>
            <td datatype='Sup. total (m2)'>120</td>
            <td datatype='Extra'>Esta casa tiene 2 baños, 3 dormitorios y los siguientes amenities...</td>
            <td datatype='Delete'>
              <button className="appraisals-btn" type='delete'>
                <i class="fa-regular fa-trash-can"></i>
              </button>
            </td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default Appraisals