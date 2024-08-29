import React from 'react';
import "./footer.css"
import { Link } from "react-router-dom"
import { Avatar } from '@chakra-ui/react';


const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <div className='footer'>
      <Avatar size="x2" src="../src/assets/images/logo.png" alt="Logo Del Sur Inmobiliaria" title="Logo Del Sur Inmobiliaria"/>
      <div className='main-social-icons-container'>
        <h2 className='link-title'>Redes sociales:</h2>
        <div className='social-icons-container'>
          <a href="https://www.instagram.com/delsur.inmobiliaria/" target='blank' className='social-icon' title='Instagram Del Sur Inmobiliaria'></a>
          <a href="https://www.facebook.com/delsurinmobiliaria" target='blank' className='social-icon' title='Facebook Del Sur Inmobiliaria'></a>
          <a href="https://api.whatsapp.com/send?phone=541151822809&text=&source=&data=&app_absent=" target='blank' className='social-icon' title='Whatsapp Del Sur Inmobiliaria'></a>
        </div>
      </div>

      <div>
        <h2 className='link-title'>Links</h2>
          <ul>
            <Link to="propiedades">
              <li className='menu-item'>Propiedades</li>
            </Link>
            <Link to="tasaciones">
              <li className='menu-item'>Tasaciones</li>
            </Link>
            <Link to="nosotros">
              <li className='menu-item'>Nosotros</li>
            </Link>
            <Link to="contacto">
              <li className='menu-item'>Contacto</li>
            </Link>
          </ul>
      </div>

      <iframe className='maps' title='Ubicación Del Sur Inmobiliaria' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.992631351957!2d-58.17429965416357!3d-34.88153134631936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2d9ce90a49991%3A0x3f74384004a41188!2sDel%20Sur%20Inmobiliaria!5e0!3m2!1ses!2sar!4v1691772175516!5m2!1ses!2sar" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      <p className="footer__copyright">&copy; {year} developed by Máximo Felipe Resi & Martín Catalano Resi. All rights reserved.</p>
    </div>
  )
}

export default Footer;