import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from "reactstrap";
import Helmet from '../components/Helmet/Helmet'
import ItemList from '../components/Body/ItemList'
import CommonSection from '../components/UI/CommonSection'
import axios from 'axios';
import { useState } from 'react';
import {store} from '../redux/store/store'
import { useEffect } from 'react';
import "../styles/propiedades.css"
import Pagination from '../components/Body/Pagination';




const Propiedades = () => {





  // *********************************************************
  // paginador 

  const [data, setData] = useState([]);

  return (
    <Helmet title="Propiedades e Inmuebles">
        <CommonSection title="Propiedades"/>
            

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