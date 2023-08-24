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
                        <label className="add-label" for="direction">Direccion</label>
                        <input className="add-input" type="text" id='direction' name='direction' placeholder='Direccion' required/>
                    </div>
                
                    <div className='form__group'>
                        <label className="add-label" for="description">Descripcion</label>
                        <input className="add-input" type="text" id='description' name='description' placeholder='Descripcion...' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="m2">m2</label>
                        <input className="add-input" type="number" id='m2' name='m2' placeholder='0' required/>   
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
                        <label className="add-label" for="garage">Garage</label>
                        <input className="add-input" type="number" id='garage' name='garage' placeholder='0' required/>   
                    </div>

                    <div className='form__group'>
                        <h4>Categoria</h4>
                        <select>
                        <option>Seleccionar categoria</option>
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
                        <h4>Tipo</h4>
                        <select>
                        <option>Seleccionar tipo</option>
                            <option value="venta">Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </div>


                    <div className='form__group'>
                        <label className="add-label" for="price">Precio</label>
                        <input className="add-input" type="number" id='price' name='price' placeholder='$1000' required/>   
                    </div>

                    <div className='form__group'>
                        <label className="add-label" for="files">Imagenes</label>
                        <input className="addfile-input" type="file" id='file' name='file' placeholder='Imagenes' required/>   
                    </div>

                    <button className="add-btn" type='submit'>Añadir Propiedad</button>
                </div>

          
            
            </form>
        </Helmet>
    </div>
  )
}

export default AddProperties