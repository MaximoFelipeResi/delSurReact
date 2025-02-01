import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { store, setAuth } from "../redux/store/store";
import { useEffect} from 'react';
import CasaDestacada from '../components/Body/casas/CasaDestacada.jsx'; 
import Helmet from "../components/Helmet/Helmet"
import Pagination from '../components/Body/Pagination';
import CommonSection from "../components/UI/CommonSection" 
import "../styles/inicio.css";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const Inicio = () => {

  const[cards, setCards] = useState([]);


  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    const response = await axios.post(`${store.getState().api}/addproperties`, {destacado: 1});
    setCards(response.data.data);
  };


  let casas_cards = [];
  for (let casa of cards) {
    casas_cards.push(<CasaDestacada data={casa}/>)
  }


  return (
  <div>
    <Helmet title = "Inicio">
      <CommonSection title= "Inicio" />
    <h2 className="title-featuredprop">Propiedades Destacadas</h2>
    <div className='featured-properties'>
      
      {casas_cards}
    </div>
    </Helmet>
    <div className='button-container'>
      <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank'>
        <img className='btn-wsp' src="/images/whatsapp-sticky.png" alt="Clickea aquí para contactarnos" title='Whatsapp Del Sur Inmobiliaria'/>
      </Link>
    </div>
  </div>
  )
}

export default Inicio