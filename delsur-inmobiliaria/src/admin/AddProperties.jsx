import React from 'react'
import Helmet from '../components/Helmet/Helmet'

import "./admin-css/addproperties.css"

const AddProperties = () => {
  return (
    <div>
        <Helmet title="Agregar Propiedades">
            
            <form className='add-form'>

                <h2>Agregar Propiedades</h2>

                <div className='addform-container'>

                    <div className='form__group'>
                        <label className="add-label" for="title">Titulo</label>
                        <input className="add-input" type="text" id='title' name='title' placeholder='Titulo' required/>
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="direction">Dirección</label>
                        <input className="add-input" type="text" id='direction' name='direction' placeholder='Direccion' required/>
                    </div>
                
                    <div className='form__group'>
                        <label className="add-label" for="description">Descripción</label>
                        <input className="add-input" type="text" id='description' name='description' placeholder='Descripcion...' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="cm2">Superficie cubierta (m2)</label>
                        <input className="add-input" type="number" id='cm2' name='cm2' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="tm2">Superficie total (m2)</label>
                        <input className="add-input" type="number" id='tm2' name='tm2' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="environments">Ambientes</label>
                        <input className="add-input" type="number" id='environments' name='environments' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="bedrooms">Dormitorios</label>
                        <input className="add-input" type="number" id='bedrooms' name='bedrooms' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="bathroom">Baños</label>
                        <input className="add-input" type="number" id='bathroom' name='bathroom' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="garage">Garaje</label>
                        <input className="add-input" type="number" id='garage' name='garage' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="garage">Localización</label>
                        <input className="add-input" type="text" id='localizacion' name='localizacion' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="price">Precio</label>
                        <input className="add-input" type="number" id='price' name='price' placeholder='$1000' required/>   
                    </div>

                    <div className='form__group'>
                        <h4>Propiedad Destacada</h4>
                        <select>
                        <option>Seleccionar opcion</option>
                            <option value="casa">Si</option>
                            <option value="lote">No</option>
                        </select> 
                    </div>

                    <div className='form__group'>
                        <h4>Tipo de propiedad</h4>
                        <select>
                        <option>Seleccionar tipo</option>
                            <option value="casa">Casa</option>
                            <option value="lote">Lote</option>
                            <option value="quinta">Quinta</option>
                            <option value="campo">Campo</option>
                            <option value="departamento">Departamento</option>
                            <option value="local">Local</option>
                            <option value="cochera">Cochera</option>
                        </select>
                    </div>

                    <div className='form__group'>
                        <h4>Operación</h4>
                        <select>
                        <option>Operación</option>
                            <option value="venta">Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </div>

                    <div className='file-wrapper'>
                            <h3 className='img-file'>Imágenes</h3>
                            <input className="addfile-input" accept='.jpg' type="file" id='upload' hidden required />   
                            <label className="addfile-label" for="upload">
                                <span><i class="fa-solid fa-cloud-arrow-up"></i></span>
                                <p>Click para subir archivo</p>
                            </label>

                        <div id='filewrapper'>
                            <h3 className='uploaded'>Documentos subidos</h3>
                            <div className="showfilebox">
                                <div className="left-file">
                                    <span className='filetype'>pdf</span>
                                    <h3>imagen1-casa-adrogue.pdf</h3>
                                </div>
                                <div className="right-file">
                                    <span>&#215;</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="add-btn" type='submit'>Añadir Propiedad</button>
                </div>

          
            
            </form>
        </Helmet>
    </div>
  )
}

export default AddProperties