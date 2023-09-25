import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import {
  store,
  setAuth,
  increasePage,
  decreasePage,
  restartPropiedadesPage,
  setTipoOperacionStore,
  setTipoPropiedadStore,
  setBusquedaPropiedad,
} from "../../redux/store/store";
import { useSelector, useDispatch } from "react-redux";

import CasaCard from "./casas/CasaCard";
import "../Body/item-list.css";
import Pagination from "../../components/Body/Pagination";
import { getPropiedades } from "../../redux/store/store";

import ElementosList from "../../pages/ElementosList";

const endpoint = store.getState().api;

const ItemList = () => {
  const dispatch = useDispatch();
  const [properties, setProperties] = useState([]);

  const [elementos, setElementos] = useState([]);

  const filtrarElementos = () => {
    axios
      .post("/api/filtrar-elementos", { filtro })
      .then((response) => {
        setElementos(response.data.elementos);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const propiedades = useSelector((state) => {
    return state.propiedades;
  });

  useEffect(() => {
    dispatch(setTipoOperacionStore(null));
    dispatch(setTipoPropiedadStore(null));
    dispatch(setBusquedaPropiedad(""));

    dispatch(
      getPropiedades({
        endpoint: `${endpoint}/addproperties`,
      })
    );

    dispatch(restartPropiedadesPage());

    document.getElementById("searchBox").addEventListener("keypress", (evt) => {
      if (evt.key === "Enter" || evt.keyCode === 13) {
        refresh();
      }
    });
  }, []);

  let casas_cards = [];
  const updatePropiedades = () => {};

  // ******************************************************
  // filtrado por categoria

  const [tipoPropiedad, setTipoPropiedad] = useState(null);
  const [filtro, setFiltro] = useState(null);

  const [resultados, setResultados] = useState([]);
  const endpoint = store.getState().api;

  /*
  useEffect(() => {
    const cargarResultados = async () => {
      const response = await axios.post(
        `${endpoint}/addproperties/${tipoPropiedad}`
      );
      setResultados(response.data.data);
    };
    if (tipoPropiedad) {
      cargarResultados();
    }
  }, [tipoPropiedad]);

  */

  const handleTipoPropiedadChange = async (event) => {
    //setTipoPropiedad(event.target.value);
    dispatch(setTipoPropiedadStore(event.target.value));
    refresh();
  };

  const handleFiltroChange = async (event) => {
    //setFiltro(event.target.value);
    dispatch(setTipoOperacionStore(event.target.value));
    refresh();
  };

  const handleBusquedaChange = async (event) => {
    //setFiltro(event.target.value);
    dispatch(setBusquedaPropiedad(event.target.value));
    //refresh();
  };

  const search = async () => {
    refresh();
  };

  const refresh = () => {
    dispatch(
      getPropiedades({
        endpoint: `${endpoint}/addproperties`,
      })
    );

    dispatch(restartPropiedadesPage());
  };

  // ***********************************************
  // filtrado por Operacion

  const [tipoOperacion, setTipoOperacion] = useState("");
  const [resultadosOperacion, setResultadosOperacion] = useState([]);

  // **********************************************************
  //filtrado por search

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Llama a tu API de Laravel aquí para obtener datos filtrados según searchTerm.
    // Actualiza setData con los datos filtrados.
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <section className="properties__section">
        <div className="filtrosContainer">
          <div className="filter__widget">
            <select value={tipoPropiedad} onChange={handleTipoPropiedadChange}>
              {" "}
              {/*value={tipoPropiedad} onChange={handleTipoPropiedadChange} */}
              <option>Tipo de propiedad</option>
              <option value="0">Casa</option>
              <option value="1">Lote</option>
              <option value="2">Quinta</option>
              <option value="3">Campo</option>
              <option value="4">Departamento</option>
              <option value="5">Local</option>
              <option value="6">Cochera</option>
            </select>
          </div>

          <div className="filter__widget">
            <select value={filtro} onChange={handleFiltroChange}>
              <option>Ordenar por</option>
              <option value="0">Venta</option>
              <option value="1">Alquiler</option>
            </select>
          </div>
        </div>

        <div className="search__box" id="searchBox">
          <input
            type="text"
            placeholder="Direccion: "
            onChange={handleBusquedaChange}
          />{" "}
          {/*value={searchTerm}  onChange={handleSearchChange} */}
        </div>
      </section>

      {(() => {
        let index = 0;
        let elements = [];
        if (typeof propiedades?.data === "object") {
          for (let propiedad of propiedades.data) {
            elements.push(<CasaCard data={propiedad} key={index} />);
            index++;
          }
        }
        return elements;
      })()}

      <Pagination
        target={increasePage({
          target: "propiedades_page",
          target_b: "total_pages_propiedades",
        })}
        dispatch={getPropiedades({
          endpoint: `${endpoint}/addproperties`,
        })}
        target_b={decreasePage({
          target: "propiedades_page",
        })}
      />
    </div>
  );
};

export default ItemList;
