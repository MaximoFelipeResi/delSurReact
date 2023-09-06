import React from 'react'

import "./pagination.css"

const Pagination = () => {


  return (
    <div className='pagination-container'>
      <ul className='pages'>

        <a href="#">
          <li>Anterior</li>
        </a>

        <a href="#">
          <li>1</li>
        </a>

        <a href="#">
          <li>2</li>
        </a>

        <a href="#" className='active'>
          <li>3</li>
        </a>

        <a href="#">
          <li>4</li>
        </a>

        <a href="#">
          <li>5</li>
        </a>

        <a href="#">
          <li>...</li>
        </a>

        <a href="#">
          <li>Siguiente</li>
        </a>

      </ul>
    </div>
  )
}

export default Pagination