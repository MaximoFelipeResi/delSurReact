import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";

import Helmet from '../components/Helmet/Helmet'
import ItemList from '../components/Body/ItemList'
import CommonSection from '../components/UI/CommonSection'

import "../styles/propiedades.css"

const Propiedades = () => {
  return (
    <Helmet title="Propiedades e Inmuebles">
        <CommonSection title="Propiedades"/>
            <section>
            <div className="filter__widget">
              <select>
                <option>Filtrar por categoria</option>
                  <option value="casa">Casa</option>
                  <option value="departamento">Departamento</option>
                  <option value="local">Local</option>
                  <option value="cochera">Cochera</option>
                  <option value="lote">Lote</option>
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
                <input type="text" placeholder='Search...'/>
                  <span>
                      <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
              </div>
            </section>

              <ItemList/>

            <div className='published container'>
              <div className='rectangle-card'>

              </div>
            </div>

              

            <div className='button-container'>
              <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
                <img className='btn-wsp' src="../src/assets/images/whatsapp-sticky.png" alt="Clickea aquí para contactarnos" />
              </Link>
            </div>
    </Helmet>
  )
}

export default Propiedades