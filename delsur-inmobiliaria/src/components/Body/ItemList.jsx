import React from "react";

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { store, setAuth } from "../../redux/store/store";
import { checkUser } from "../../utils/user";
import CasaCard from './casas/CasaCard';


// traer la funcion de getAllProperties desde el otro archivo y hacer un mapeo por ID

import "../Body/item-list.css";

const endpoint = store.getState().api;
const endpointFile = store.getState().apiFile;

const ItemList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getAllProperties();
  }, []);

  const getAllProperties = async () => {
    const response = await axios.post(`${endpoint}/addproperties`);
    setCards(response.data.data);
  };


  /*for (let x of card){      // buscar la forma de como hacer el mapeo

  }*/

  let casas_cards = [];
  for (let casa of cards) {
    casas_cards.push(<CasaCard data={casa}/>)
  }

  return (
    <div>
      {casas_cards}
    </div>
  );
};

export default ItemList;
