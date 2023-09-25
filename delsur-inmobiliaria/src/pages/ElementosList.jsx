import React from 'react'
import CasaCard from '../components/Body/casas/CasaCard';

function ElementosList({ elementos }) {
    return (
        <ul>
            {elementos.map((elemento) => (
                <CasaCard data={elemento.data} />
            ))}
        </ul>
    );
  }

export default ElementosList