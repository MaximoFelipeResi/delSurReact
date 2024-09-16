import React, { useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../redux/store/store";

import "./admin-css/addproperties.css";

import { checkUser } from "../utils/user";

const initialValues = {
  archivos: null,
  archivosnombre: "",
  archivoURL: "",
};
const AddProperties = () => {
  const endpoint = store.getState().api;
  const endpointFile = store.getState().apiFile;

  const [titulo, setTitulo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [m2, setM2] = useState("");
  const [totalm2, setTotalm2] = useState("");
  const [ambientes, setAmbientes] = useState("");
  const [dormitorios, setDormitorios] = useState("");
  const [banios, setBanios] = useState("");
  const [garage, setGarage] = useState("");
  const [categoria, setCategoria] = useState("");
  const [operacion, setOperacion] = useState("");
  const [precio, setPrecio] = useState("");
  const [map, setMap] = useState("");
  const [destacado, setDestacado] = useState("");
  const navigate = useNavigate();

  // FILES

  const [archivos, setArchivo] = useState(initialValues);
  const [files, setFiles] = useState([]);

  const fileSelecHandler = (e) => {
    console.log(e);
    setArchivo({
      archivos: e.target.files,
    });
  };

  const onSubmit = () => {
    sendFiles();
  };
  const sendFiles = async () => {
    let last_id = null;
    await axios.get(`${endpoint}/properties/last`).then((response) => {
      last_id = response.data.id;
    });

    let index = 0;
    const fd = new FormData();

    for (let archive of archivos.archivos) {
      const filename = `${last_id}_${index}.jpg`;

      fd.append("files[]", archive, filename);
      index++;
    }

    axios.post(endpoint + "/upload", fd).then((res) => {});
  };

  const getImages = () => {
    console.log("imagenes :");
    axios.get(endpoint + "/files").then((response) => {
      setFiles(response.data.archivos);
    });
  };

  const getImagesOnSubmit = () => {
    onSubmit();
  };

  const Store = async (event) => {
    event.preventDefault();

    let last_id = null;
    await axios.get(`${endpoint}/properties/last`).then((response) => {
      last_id = response.data.id;
    });

    await axios.post(endpoint + "/listproperties", {
      id: last_id,
      titulo: titulo,
      direccion: direccion,
      descripcion: descripcion,
      m2: m2,
      totalm2: totalm2,
      ambientes: ambientes,
      dormitorios: dormitorios,
      banios: banios,
      garage: garage,
      categoria: categoria,
      operacion: operacion,
      precio: precio,
      destacado: destacado,
      map: map,
    });
    navigate("/");
  };

  if (!checkUser()) {
    location.href = "/";
  }

  const check = () => {
    if (checkUser()) {
      return (
        <div>
          <Helmet title="Agregar Propiedades">
            <form className="add-form" onSubmit={Store}>
              <h2 className="title-featuredprop">Agregar Propiedades</h2>

              <div className="addform-container">
                <div className="form__group">
                  <label className="add-label" for="title">
                    Titulo
                  </label>
                  <input
                    className="add-input"
                    type="text"
                    id="title"
                    name="title"
                    value={titulo}
                    placeholder="Titulo"
                    onChange={(e) => setTitulo(e.target.value)}
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="direction">
                    Dirección
                  </label>
                  <input
                    className="add-input"
                    type="text"
                    id="direction"
                    name="direction"
                    value={direccion}
                    onChange={(e) => setDireccion(e.target.value)}
                    placeholder="Direccion"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="description">
                    Descripción
                  </label>
                  <input
                    className="add-input"
                    type="text"
                    id="description"
                    name="description"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    val
                    placeholder="Descripcion..."
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="cubiertam2">
                    superficie Cubierta (m2)
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="m2"
                    name="m2"
                    value={m2}
                    onChange={(e) => setM2(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="totalm2">
                    superficie Total(m2)
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="totalm2"
                    name="totalm2"
                    value={totalm2}
                    onChange={(e) => setTotalm2(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="environments">
                    Ambientes
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="environments"
                    name="environments"
                    value={ambientes}
                    onChange={(e) => setAmbientes(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="bedrooms">
                    Dormitorios
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    value={dormitorios}
                    onChange={(e) => setDormitorios(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="bathroom">
                    Baños
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="bathroom"
                    name="bathroom"
                    value={banios}
                    onChange={(e) => setBanios(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="garage">
                    Garaje
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="garage"
                    name="garage"
                    value={garage}
                    onChange={(e) => setGarage(e.target.value)}
                    placeholder="0"
                    required
                  />
                </div>
                <div className="form__group">
                  <label className="add-label" for="map">
                    Localización
                  </label>
                  <input
                    className="add-input"
                    type="text"
                    id="map"
                    name="map"
                    value={map}
                    onChange={(e) => setMap(e.target.value)}
                    placeholder="map"
                  />
                </div>

                <div className="form__group">
                  <label className="add-label" for="price">
                    Precio
                  </label>
                  <input
                    className="add-input"
                    type="number"
                    id="price"
                    name="price"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="$1000"
                    required
                  />
                </div>
                <div
                  className="form__group"
                  value={destacado}
                  onChange={(e) => setDestacado(e.target.value)}
                >
                  <h4>Propiedad Destacada</h4>
                  <select>
                    <option>Seleccionar opcion</option>
                    <option value="1">Si</option>
                    <option value="0">No</option>
                  </select>
                </div>

                <div
                  className="form__group"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                >
                  <h4>Tipo de propiedad</h4>
                  <select>
                    <option>Seleccionar tipo</option>
                    <option value="0">Casa</option>
                    <option value="1">Lote</option>
                    <option value="2">Quinta</option>
                    <option value="3">Campo</option>
                    <option value="4">Departamento</option>
                    <option value="5">Local</option>
                    <option value="6">Cochera</option>
                  </select>
                </div>

                <div
                  className="form__group"
                  value={operacion}
                  onChange={(e) => setOperacion(e.target.value)}
                >
                  <h4>Operación</h4>
                  <select>
                    <option>Seleccionar tipo</option>
                    <option value="0">Venta</option>
                    <option value="1">Alquiler</option>
                  </select>
                </div>

                <div className="file-wrapper">
                  <h3 className="img-file">Imágenes</h3>
                  <input
                    className="addfile-input"
                    onChange={fileSelecHandler}
                    multiple
                    type="file"
                    id="upload"
                    hidden
                    required
                  />
                  <label className="addfile-label" for="upload">
                    <span>
                      <i class="fa-solid fa-cloud-arrow-up"></i>
                    </span>
                    <p>Click para subir archivo</p>
                  </label>
                  <div id="filewrapper">
                    <h3 className="uploaded">Documentos subidos</h3>
                    <div className="showfilebox">
                      <div className="left-file">
                        <div className="image-grid">
                          {files.map(
                            (
                              file,
                              index // solucionar problema de la URL
                            ) => (
                              <img
                                key={index}
                                src={`${endpointFile}/archivos/${file}`}
                                alt={`Imagen ${index}`}
                              />
                            )
                          )}
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="add-btn"
                  onClick={getImagesOnSubmit}
                  type="submit"
                >
                  Añadir Propiedad
                </button>
              </div>
            </form>
          </Helmet>
        </div>
      );
    }
  };

  return check();
};

export default AddProperties;
