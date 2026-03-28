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
    <div className="card-wrapper">
      <div className="modern-card">
        {/* Imagen con Badge flotante */}
        <div className="card-image-container">
          <img
            src={store.getState().apiArchivos + "/" + data?.data?.images?.[0]}
            alt={data.data.titulo}
            className="card-img"
          />
        </div>

        {/* Contenido */}
        <div className="card-body">
          <div className="operation-badge">
            {parseOperacion(data.data.operacion)}
          </div>
          <div className="card-header">
            <h3 className="card-price">U$D {data.data.precio}</h3>
            <h2 className="card-title">{data.data.titulo}</h2>
            <p className="card-address">
              <i className="fa-solid fa-location-dot"></i> {data.data.direccion}
            </p>
          </div>

          {/* Iconos - Se mantienen los 6 originales */}
          <div className="card-specs">
            <div className="spec-item">
              <i className="fa-solid fa-ruler-vertical"></i>
              <span>{data.data.m2}m²</span>
            </div>
            <div className="spec-item">
              <i className="fa-solid fa-ruler-combined"></i>
              <span>{data.data.totalm2}m²</span>
            </div>
            <div className="spec-item">
              <i className="fa-solid fa-door-open"></i>
              <span>{data.data.ambientes}</span>
            </div>
            <div className="spec-item">
              <i className="fa-solid fa-bed"></i>
              <span>{data.data.dormitorios}</span>
            </div>
            <div className="spec-item">
              <i className="fa-solid fa-bath"></i>
              <span>{data.data.banios}</span>
            </div>
            <div className="spec-item">
              <i className="fa-solid fa-warehouse"></i>
              <span>{data.data.garage}</span>
            </div>
          </div>

          <div className="card-footer">
            <button 
              className="details-btn"
              onClick={() => {
                store.dispatch(setCasa(data.data));
                window.location.href = "itemdetail";
              }}
            >
              Ver Propiedad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default casaCard;
