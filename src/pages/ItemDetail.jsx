import React,{
  useEffect,
  useRef,
  useState
} from "react";
import axios from "axios";
import { store } from "../redux/store/store";
import ImageGrid from "../components/Body/casas/ImageGrid";
import { useNavigate } from "react-router-dom";

import "../styles/item-detail.css";

const ItemDetail = () => {
  const [images, setImages] = useState([]);
  const [casa, setCasa] = useState([]);
  let image_list = [];


// ********** Contactos **********
  //const [idProp, setIdProp] = useState('');
  const [nombre, setNombre] = useState('');
  const [numero, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();

  const Store = async(event)=>{
    event.preventDefault();
    await  axios.post(store.getState().api + "/Listaqueries",
      {fullname:nombre, number:numero, email:email, descripcion:descripcion});
      navigate('/');
  }

  useEffect(() => {
    setCasa(store.getState().casa);

    axios
      .post(store.getState().api + "/propertie/images", { id: store.getState().casa.id })
      .then((response) => {
        setImages(response.data.files);
      });
  },[]);


  for (let image of images) {
    image_list.push(<ImageGrid image={store.getState().apiArchivos + "/" + image}/>);
  }



  function esDestacado(num){
    switch(num){
      case 0:
        return ;

      case 1 : 
        return (
          <span>
            <i id="star" className="fa-solid fa-star fa-xl"></i>
          </span>
        ) ;

      default:
        break;
    }
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
        <div className="grid-gallery">
        

        {image_list}
        </div>

        <div className="itemdetail-body">
          <div className="price__item">
            <h2 className="item__main">
              Tipo de propiedad: {parseCategoria(casa.categoria)}
            </h2>
            <h2 className="item__main">U$D {casa.precio}</h2>
          </div>

          <div className="details__wrapper">
            <h2 className="item__title">{casa.titulo} </h2>
            <h3 className="item__info">{casa.direccion}</h3>
            <div className="state__prop">
              <h3 className="item__state">
                {parseOperacion(casa.operacion)}
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
                  {casa.ambientes} 
                </span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-bed"></i>
                </span>
                <span className="texts">
                  {" "}
                  {casa.dormitorios}
                </span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-bath"></i>
                </span>
                <span className="texts"> {casa.banios}</span>
              </div>

              <div className="icon-details">
                <span className="icons">
                  <i class="fa-solid fa-warehouse"></i>
                </span>
                <span className="texts"> {casa.garage} </span>
              </div>
              
              
              <div className="icon-details">
                {esDestacado(casa.destacado) !== 1 ? esDestacado(casa.destacado) : null}
                <span className="text-star">
                 
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
            <iframe className='map__itemdetail'
              src={casa.map}
              width="800"
              height="700"
              allowFullScreen="false"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
            <div/>

            <form onSubmit={Store}
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
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
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
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
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
                    value={numero}
                    onChange={(e)=>setNumero(e.target.value)}
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
                value={descripcion}
                onChange={(e)=>setDescripcion(e.target.value)}
                id="message"
                cols="30"
                rows="6"
                placeholder="¡Hola! Quiero que se comuniquen conmigo por esta propiedad llamada “Colocar el nombre de la propiedad aquí” que vi en DelSur."
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
