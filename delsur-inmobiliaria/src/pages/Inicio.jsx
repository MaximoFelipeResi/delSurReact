import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';

import Helmet from '../components/Helmet/Helmet.jsx';
import CommonSection from '../components/UI/CommonSection';


import "../styles/inicio.css";
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


const Inicio = () => {
  return (
    <Helmet title='Inicio'>
        <CommonSection title='Inicio' />
        <div>
        
          <h2 className="title-featuredprop">Propiedades Destacadas</h2>

          <div className='featured-properties'>

            <article className='card'>
              <div className='header-card'>
                <img src="https://calliaweb8d4c.b-cdn.net/wp-content/uploads/2015/10/600x600.jpg.bv.webp?bv_host=www.calliaweb.co.uk" alt="Casa Destacada Imagen" />
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

            <article className='card'>
              <div className='header-card'>
                <img src="https://calliaweb8d4c.b-cdn.net/wp-content/uploads/2015/10/600x600.jpg.bv.webp?bv_host=www.calliaweb.co.uk" alt="Casa Destacada Imagen" />
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

            <article className='card'>
              <div className='header-card'>
                <img src="https://calliaweb8d4c.b-cdn.net/wp-content/uploads/2015/10/600x600.jpg.bv.webp?bv_host=www.calliaweb.co.uk" alt="Casa Destacada Imagen" />
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

            <article className='card'>
              <div className='header-card'>
                <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
                </Swiper>
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

            <article className='card'>
              <div className='header-card'>
                <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
                </Swiper>
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

            <article className='card'>
              <div className='header-card'>
                <Swiper
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            >
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
                </Swiper>
              </div>
              <div className='footer-card'>
                <div className="category-card">
                  <span>Estado</span>
                </div>
                <div className="text-card">
                  <h3>Titulo card...</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, repudiandae. Aperiam iste porro eveniet suscipit, possimus sapiente soluta enim veritatis praesentium doloremque quod sunt consectetur.</p>
                </div>
                <button className='btn-watchmore'>Ver más</button>
              </div>
            </article>

          </div>

            

          <div className='button-container'>
              <Link to="https://api.whatsapp.com/send?phone=541151822809&text=&source=& data=&app_absent=" target='blank'>
                <img className='btn-wsp' src="../src/assets/images/whatsapp-sticky.png"   alt="Clickea aquí para contactarnos" />
              </Link>
            </div>
        </div>
    </Helmet>
  )
}

export default Inicio