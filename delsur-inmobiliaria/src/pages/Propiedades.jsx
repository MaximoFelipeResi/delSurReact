import React from 'react'
import { Link } from 'react-router-dom'


import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import ItemList from '../components/Body/ItemList'
import Pagination from '../components/Body/Pagination'

import "../styles/propiedades.css"

const Propiedades = () => {
  return (
    <Helmet title="Propiedades e Inmuebles">
        <CommonSection title="Propiedades"/>
            <section className='properties__section'>
            <div className="filter__widget">
              <select>
                <option>Tipo de propiedad</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="campo">Campo</option>
                  <option value="lote">Lote</option>
                  <option value="quinta">Quinta</option>
                  <option value="local">Local</option>
                  <option value="cochera">Cochera</option>
              </select>
            </div>

              <div className="filter__widget">
                <select>
                <option>Ordenar por</option>
                  <option value="venta">Venta</option>
                  <option value="alquiler">Alquiler</option>
                </select>
              </div>

              <div className="search__box">
                <input type="text" placeholder='Buscar...'/>
              </div>
            </section>          
              
              <ItemList />

              <Pagination/>

            <div className='button-container'>
              <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
                <img className='btn-wsp' src="../src/assets/images/whatsapp-sticky.png" alt="Clickea aquí para contactarnos" />
              </Link>
            </div>
    </Helmet>
  )
}

export default Propiedades