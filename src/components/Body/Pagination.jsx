import React from 'react'

import "./pagination.css"
import { useSelector, useDispatch } from "react-redux";
import { getPropiedades } from "../../redux/store/store";

const Pagination = (props) => {
  const dispatch = useDispatch();

  const nextPage = async () => {
    await dispatch(props.target);
    dispatch(props.dispatch);
  }

  const previousPage = async () => {
    await dispatch(props.target_b);
    dispatch(props.dispatch);
  }

  return (
    <div className='pagination-container'>
      <ul className='pages'>

        <a onClick={previousPage}>
          <li>Anterior</li>
        </a>

        <a onClick={nextPage}>
          <li>Siguiente</li>
        </a>

      </ul>
    </div>
  )
}

export default Pagination