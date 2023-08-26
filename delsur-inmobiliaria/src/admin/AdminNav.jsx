import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import {store, setAuth} from '../redux/store/store';
import { Container, Row } from "reactstrap";


import "../admin/admin-css/admin-nav.css";

import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const admin__nav = [
    {
        display:'Add Properties',
        path:'add-properties',
    },
    {
      display:'All Properties',
      path:'all-properties'
    },
    {
        display:'Queries',
        path:'queries',
    },
    {
        display:'Appraisals',
        path:'appraisals'
    },
]

const AdminNav = () => {
  const navigate = useNavigate();


  const logout = () => {
    axios.post(`${store.getState().api}/logout`, {
      token: store.getState().token.token
    }).then((response) => {
      if(response.data.status == "success") {
        store.dispatch(setAuth({
          user: null,
          token: null,
        }));
        location.href = "/";
      }
      else {
        alert("ERROR");
      }
    });
  }

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
                            <a className='logout-btn'  onClick={logout}>
                              Logout
                            </a>
                            
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