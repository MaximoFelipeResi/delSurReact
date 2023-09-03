import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { store } from "../redux/store/store";
import ImageGrid from "../components/Body/casas/ImageGrid";

import "../styles/item-detail.css";

const ItemDetail = (props) => {
  const [images, setImages] = useState([]);
  const [casa, setCasa] = useState([]);
  let image_list = [];

  //console.log("casa", casa);

  useEffect(() => {
    setCasa(store.getState().casa);

    axios
      .post(store.getState().api + "/propertie/images", { id: store.getState().casa.id })
      .then((response) => {
        setImages(response.data.files);
      });
  }, []);


  for (let image of images) {
    // console.log(image);
    image_list.push(<ImageGrid image={store.getState().apiArchivos + "/" + image}/>);
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

  return (
    <div className="itemdetail">
      <div className="itemdetail-container">
        {/*  TRAER LAS IMAGENES AQUI */}
        <div className="grid-gallery">
        

        {image_list}

{/*
          

  {() => {
            for (let image of images) {
              console.log(image);
              image_list.push(`
                <div className="grid-item">
                  <a
                    href="../src/assets/images/cafefondo1.jpg"
                    data-lightbox="gridImage"
                  >
                    <img
                      src={store.getState().apiArchivos + "/" + image}
                      alt=""
                    />
                  </a>
                </div>
                `
                
              );
            }
          }}

          

          <div className='grid-item'>
            <a href="../src/assets/images/cafefondo1.jpg" data-lightbox="gridImage">
            <img src={store.getState().apiArchivos + "/" + images[2]} alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/cafefondo1.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/cafefondo1.jpg" alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/cafefondo1.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/cafefondo1.jpg" alt="" />
            </a>
          </div>
          
          <div className='grid-item'>
            <a href="../src/assets/images/cafefondo1.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/cafefondo1.jpg" alt="" />
            </a>
          </div>
          
          */}
        </div>

        <div className="itemdetail-body">
          <div className="price__item">
            <h2 className="item__main">
              {parseCategoria(casa.categoria)} categoria
            </h2>
            <h2 className="item__main">U$D {casa.precio} precio</h2>
          </div>

          <div className="details__wrapper">
            <h2 className="item__title">{casa.titulo} titulo</h2>
            <h3 className="item__info">{casa.descripcion} info</h3>
            <div className="state__prop">
              <h3 className="item__state">
                {parseOperacion(casa.operacion)} operacion
              </h3>
            </div>
            <div className="icons__wrapper">
              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-ruler-vertical"></i>
                </span>
                <span className="texts">
                  {" "}
                  {casa.totalm2} m² Total
                </span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-ruler-combined"></i>
                </span>
                <span className="texts"> {casa.m2} m² Cubierto</span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-door-open"></i>
                </span>
                <span className="texts">
                  {" "}
                  {casa.ambientes} Ambientes
                </span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-bed"></i>
                </span>
                <span className="texts">
                  {" "}
                  {casa.dormitorios} Dormitorios
                </span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-bath"></i>
                </span>
                <span className="texts"> {casa.banios} Baños</span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-warehouse"></i>
                </span>
                <span className="texts"> {casa.garage} Garage</span>
              </div>

              <div className="icon-details">
                <span>
                  <i id="star" class="fa-solid fa-star fa-xl"></i>
                </span>
                <span className="text-star">
                  {/*{consulta.destacado} */} Propiedad Destacada
                </span>
              </div>
            </div>
          </div>

          <div className="description__wrapper">
            <p className="description-zone">
              
              {casa.descripcion}
              
            </p>
          </div>

          <div className="map-form__wrapper">
            <iframe
              src={casa.map}
              width="800"
              height="700"
              allowfullscreen="false"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>

            <form
              method="post"
              autoComplete="off"
              id="itemdetail-form"
              className="contact-form"
            >
              <div className="itemdetail-form-group">
                <div className="itemdetail-form-content">
                  <label className="itemdetail-label" for="name">
                    Nombre Completo
                  </label>
                  <input
                    className="itemdetail-input"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Nombre"
                    required
                  />
                </div>

                <div className="itemdetail-form-content">
                  <label className="itemdetail-label" for="email">
                    Correo
                  </label>
                  <input
                    className="itemdetail-input"
                    contact-label
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo"
                    required
                  />
                </div>

                <div className="itemdetail-form-content">
                  <label className="itemdetail-label" for="phone">
                    Telefono
                  </label>
                  <input
                    className="itemdetail-input"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Telefono"
                    required
                  />
                </div>
              </div>

              <label className="itemdetail-label" for="message">
                Consulta
              </label>
              <textarea
                className="itemdetail-textarea"
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="¡Hola! Quiero que se comuniquen conmigo por esta propiedad en venta que vi en DelSur."
                required
              ></textarea>

              <button type="submit" className="button-contact">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        <aside></aside>
      </div>
    </div>
  );
};

export default ItemDetail;
