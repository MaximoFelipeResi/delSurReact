import React, { Component } from 'react'

import "../Header/header.css"

class Header extends Component {

  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
  return (
    <>
      <nav className='nav-bar'>
        <a href="/">
          <img className='logo' src="/images/logo.jpg" alt="Logo Del Sur Inmobiliaria" title="Logo Del Sur Inmobiliaria"/>
        </a>

        <div>
          <ul id='navlist' className={this.state.clicked ? '#navlist active' : '#navlist'}>
            <li>
              <a className='active' href="/">Inicio</a>
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
          </ul>
        </div>

        <div id='mobile' onClick={this.handleClick}>
          <i id='bar' className={this.state.clicked 
          ? 'fas fa-times' : 'fas fa-bars'}>
          </i>
        </div>
      </nav>
    </>
  )
}
}

export default Header;