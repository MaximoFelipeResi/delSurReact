import React, { useRef, useState } from 'react'

import {initLightboxJS} from 'lightbox.js-react'

import "../styles/item-detail.css"

const ItemDetail = () => {
  /*
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'disableScrolling': true,
})*/


  return (
    <div className='itemdetail'>
      <div className="itemdetail-container">

        <div className="grid-gallery">

          <div className='grid-item'>
            <a href="../src/assets/images/cafefondo1.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/cafefondo1.jpg" alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/casa.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/casa.jpg" alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/casa1.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/casa1.jpg" alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/casa2.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/casa2.jpg" alt="" />
            </a>
          </div>

          <div className='grid-item'>
            <a href="../src/assets/images/comprar_casa.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/comprar_casa.jpg" alt="" />
            </a>
          </div>
          
          <div className='grid-item'>
            <a href="../src/assets/images/nosotros-imagen.jpg" data-lightbox="gridImage">
              <img src="../src/assets/images/nosotros-imagen.jpg" alt="" />
            </a>
          </div>

        </div>



        <div className="itemdetail-body">

          <div className="price__item">
            <h2 className='item__main'>item.type</h2>
            <h2 className='item__main'>U$D 200.000</h2>
          </div>

          <div className="details__wrapper">
            <h2 className='item__title'>item.title</h2>
            <h3 className='item__info'>item.direccion</h3>
            <div className='state__prop'>
              <h3 className='item__state'>Venta</h3>
            </div>
            <div className="icons__wrapper">

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-ruler-vertical"></i></span>
                      <span className='texts'> 210 m² Total</span>
                    </div>

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-ruler-combined"></i></span>
                      <span className='texts'> 120 m² Cubierto</span>
                    </div>

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-door-open"></i></span>
                      <span className='texts'> 5 Ambientes</span>
                    </div>

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-bed"></i></span>
                      <span className='texts'> 3 Dormitorios</span>
                    </div>

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-bath"></i></span>
                      <span className='texts'> 2 Baños</span>
                    </div>

                    <div className="icon-details">
                      <span className="icons"><i class="fa-solid fa-warehouse"></i></span>
                      <span className='texts'> 1 Garage</span>
                    </div>

                    <div className="icon-details">
                      <span><i id='star' class="fa-solid fa-star fa-xl"></i></span>
                      <span className='text-star'> Propiedad Destacada</span>
                    </div>

                  </div>
          </div>

          <div className="description__wrapper">
            <p className='description-zone'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, tempora expedita! Possimus excepturi nihil, cupiditate officia laborum, maxime delectus, quisquam ipsa repellat consequatur quaerat? Eligendi vero dolorem quas quisquam et? Dignissimos nam eos aut reiciendis aspernatur assumenda ut debitis. Dolorem ut aperiam delectus temporibus! Numquam possimus excepturi optio voluptatum ipsum ipsa fugiat quis sint facere beatae praesentium nostrum voluptatibus, cum quas animi incidunt earum cumque alias. Facere dignissimos accusamus veniam architecto temporibus ipsum mollitia quisquam cumque, repellendus eos illo impedit itaque corrupti. At recusandae similique autem dolor, impedit, consequuntur provident numquam repellat quisquam ullam tenetur a sit ab harum eius.
              <br />
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi dolor ratione nobis consequatur repudiandae corrupti unde tempora dolore aliquam ut, culpa assumenda voluptate deleniti ex magni odio sint labore optio tempore. Distinctio consequatur quaerat velit obcaecati repellat vero explicabo officia. Cumque deleniti aspernatur voluptatibus. Maiores veniam nam optio, pariatur ab temporibus ratione delectus dolorem nemo explicabo cumque corporis. Assumenda laudantium accusamus aliquam eveniet totam. Soluta qui numquam eius quisquam corrupti? Vel, repudiandae saepe autem excepturi pariatur nemo sapiente asperiores totam blanditiis eaque porro fugit, labore ducimus aliquid! Perspiciatis aliquid quia aut quibusdam, iure quod aperiam illo blanditiis excepturi quis facilis?
            </p>
          </div>

          <div className="map-form__wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13108.048374564587!2d-58.3602822!3d-34.78047085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a32ccdb97df4d3%3A0x90c1e7251b0e4b9c!2sQuinta%20La%20Australiana!5e0!3m2!1ses!2sar!4v1693583611442!5m2!1ses!2sar" width="800" height="700" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

              <form method='post' autoComplete='off' id='itemdetail-form' className='contact-form'>

                <div className='itemdetail-form-group'>

                  <div className='itemdetail-form-content'>
                    <label className='itemdetail-label' for="name">Nombre Completo</label>
                    <input className='itemdetail-input' type="text" id='name' name='name' placeholder='Nombre' required/>
                  </div>

                  <div className='itemdetail-form-content'>
                    <label className='itemdetail-label' for="email">Correo</label>
                    <input className='itemdetail-input' contact-label type="email" id='email' name='email'       placeholder='Correo' required/>
                  </div>

                  <div className='itemdetail-form-content'>
                    <label className='itemdetail-label'for="phone">Telefono</label>
                    <input className='itemdetail-input' type="tel" id='phone' name='phone' placeholder='Telefono' required/>
                  </div>

                </div>

                <label className='itemdetail-label' for='message'>Consulta</label>
                <textarea className='itemdetail-textarea' name="message" id="message" cols="30" rows="6" placeholder='¡Hola! Quiero que se comuniquen conmigo por esta propiedad en venta que vi en DelSur.' required>
                  
                </textarea>

                <button type='submit' className='button-contact'>Enviar Mensaje</button>

              </form>
        </div>
        
        </div>
        <aside>

        </aside>
      </div>
    </div>
  )
}

export default ItemDetail;