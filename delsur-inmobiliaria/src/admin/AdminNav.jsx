import React from 'react'
import { Container, Row } from "reactstrap";


import "../admin/admin-css/admin-nav.css";

import { NavLink, Link } from 'react-router-dom';

const admin__nav = [
    {
        display:'Añadir props.',
        path:'add-properties',
    },
    {
      display:'Todas las props.',
      path:'all-properties'
    },
    {
        display:'Consultas',
        path:'queries',
    },
    {
        display:'Tasaciones',
        path:'appraisals'
    },
]

const AdminNav = () => {

  return (

    <>
    <header className='admin__header'>
        <div className="admin__nav-top">
            <Container>
                <Row>
                    <div className='admin__nav-wrapper-top'>
                      <Link to="/">
                        <div className="logo">
                            <h2>DelSur Inmobiliaria</h2>
                        </div>
                      </Link>

                        <div id='admin-navlist'>
                          <ul id='admin-navlist'>
                            <li>
                              <a href="/">Inicio</a>
                            </li>
                            <li>
                              <a href="propiedades">Propiedades</a>
                            </li>
                            <li>
                              <a href="tasaciones">Tasaciones</a>
                            </li>
                            <li>
                              <a href="nosotros">Nosotros</a>
                            </li>
                            <li>
                              <a href="contacto">Contacto</a>
                            </li>
                            <li type='' className='logout-btn'>
                              <a href="">Logout</a>
                            </li>
                            
                          </ul>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    </header>

    <section className="admin__menu">
        <Container>
            <Row>
                <div className="admin__navigation">
                    <ul className="admin__menu-list">
                        {admin__nav.map((item, index) => (
                                <li className="admin__menu-item" key={index}>
                                    <NavLink 
                                    to={item.path} 
                                    className={navClass => 
                                    navClass.isActive ? "active__admin-menu" : "" 
                                    }>
                                    {item.display}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </Row>
        </Container>
    </section>
    </>
  )
};

export default AdminNav;