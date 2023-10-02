import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import '../../../styles/inicio.css';
import { store, setCasa } from "../../../redux/store/store";
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const CasaDestacada = (data) => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        axios
          .post(store.getState().api + "/propertie/images", {
            id: data.data.id,
          })
          .then((response) => {
            setImage(response.data.files[0]);
          });
      }, []);

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
    


  
    
  return (
        
          <div>

            <article className='card'>
              <div className='header-card'>
                <Swiper>
            <SwiperSlide>
              <img src={store.getState().apiArchivos + "/" + image} />
            </SwiperSlide>
                </Swiper>
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>{parseOperacion(data.data.operacion)}</span>
                </div>
                <div className="text-card">
                  <h3>{data.data.titulo}</h3>
                  <p>{data.data.direccion}</p>
                </div>
                <button className='btn-watchmore'
                onClick={()=>{
                    store.dispatch(setCasa(data.data));
                    location.href = "itemdetail";
                }}
                >Ver más</button>
              </div>
            </article>   
          </div>        
        
  )
}

export default CasaDestacada