import React, { useEffect, useState } from "react";
import { store, setCasa } from "../../../redux/store/store";
import axios from 'axios';

import './casaCard.css';

const casaCard = (data) => {
  const [image, setImage] = useState([]);
  /*
    
    
    
    */

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
    <div>
      <div className="properties-container">
        <div className="rectangle-card">
          <div className="rectangle-img cardImage" >
            <img
              src={store.getState().apiArchivos + "/" + image}
              alt="Imagen de la propiedad"
            />
          </div>

          <div className="rectangle-content">
            <div className="rectangle-details">
              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-ruler-vertical"></i>
                </span>
                <span className="text"> {data.data.m2} m²</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-ruler-combined"></i>
                </span>
                <span className="text"> {data.data.totalm2} m²</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-door-open"></i>
                </span>
                <span className="text"> {data.data.ambientes}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-bed"></i>
                </span>
                <span className="text"> {data.data.dormitorios}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-bath"></i>
                </span>
                <span className="text"> {data.data.banios}</span>
              </div>

              <div className="icon-text">
                <span className="icon">
                  <i class="fa-solid fa-warehouse"></i>
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

            <p className="excerpt">{data.data.descripcion} </p>

            <div className="rectangle-btn" class="button">
              <a
                onClick={() => {
                  store.dispatch(setCasa(data.data));
                  location.href = "itemdetail";
                }}
              >
                Más detalles
              </a>
            </div>

            {/*<div className="rectangle-btn">
              <a href="itemdetail" class="button"> Mas detalles
                <ItemDetail props={data.data} />
              </a>
</div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default casaCard;
