import React from 'react'

import "../admin/admin-css/allproperties.css"

const AllProperties = () => {


  return (
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
                  <tr key="">
                    <td className='all-td'>
                      <img src="../src/assets/images/casa.jpg" alt="imagen prop" />
                    </td>
                    <td className='all-td'>title</td>
                    <td className='all-td'>type</td>
                    <td className='all-td'>$item.price</td>
                    <td className='all-td'>
                        <button className="all-btn" type='delete'>
                        <i class="fa-regular fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default AllProperties