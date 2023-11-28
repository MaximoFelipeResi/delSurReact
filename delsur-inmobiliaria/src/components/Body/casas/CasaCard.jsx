import React, { useEffect, useState } from "react";
import { store, setCasa } from "../../../redux/store/store";
import axios from 'axios';

import './casaCard.css';

const casaCard = (data) => {
  const [image, setImage] = useState([]);
  /*
    
    
    
    */

  /*
  useEffect(() => {
    axios
      .post(store.getState().api + "/propertie/images", {
        id: data.data.id,
      })
      .then((response) => {
        console.log(response.data);
        setImage(response.data.files[0]);
      });
  }, []);
  */

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
      <div className="properties-container">
        <div className="rectangle-card">
          <div className="rectangle-img" id="cardImage" >
            <img
              src={store.getState().apiArchivos + "/" + data.data.images[0]}
              alt="Imagen de la propiedad"
            />
          </div>

          <div className="rectangle-content">
            <div className="rectangle-details">
              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-ruler-vertical"></i>
                </span>
                <span className="text"> {data.data.m2} m²</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-ruler-combined"></i>
                </span>
                <span className="text"> {data.data.totalm2} m²</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-door-open"></i>
                </span>
                <span className="text"> {data.data.ambientes}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-bed"></i>
                </span>
                <span className="text"> {data.data.dormitorios}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-bath"></i>
                </span>
                <span className="text"> {data.data.banios}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i className="fa-solid fa-warehouse"></i>
                </span>
                <span className="text"> {data.data.garage}</span>
              </div>
            </div>

            <div className="rectangle-title">
              <div className="rectangle-state">
                <span>{parseOperacion(data.data.operacion)}</span>
              </div>

              <h3 className="rectangle-main">{data.data.titulo}</h3>

              <h3 className="rectangle-main">U$D {data.data.precio}</h3>
            </div>

            <p className="excerpt">{data.data.direccion} </p>

            <div className="rectangle-btn" className="button">
              <a
                onClick={() => {
                  store.dispatch(setCasa(data.data));
                  location.href = "itemdetail";
                }}
              >
                Más detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default casaCard;
