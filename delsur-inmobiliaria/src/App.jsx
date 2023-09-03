import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Inicio from "./pages/Inicio";
import Propiedades from "./pages/Propiedades";
import Tasaciones from "./pages/Tasaciones";
import Nosotros from "./pages/Nosotros"
import Contacto from "./pages/Contacto";
import AdminLogin from "./admin/AdminLogin";
import AdminNav from "./admin/AdminNav";
import AddProperties from "./admin/AddProperties";
import Queries from "./admin/Queries";
import Appraisals from "./admin/Appraisals";
import ItemDetail from "./pages/ItemDetail";
import AllProperties from "./admin/AllProperties"

import {store, setAuth} from './redux/store/store';


function App() {
  
  const header = () => {
    if(store.getState().user) {
      return (<AdminNav></AdminNav>)
    }
    return (<Header></Header>)
  }

  /*
   let endTime = new Date();
          let timeElapsed = endTime - startTime;
  */

   useEffect(() => {
      let time = new Date() - store.getState().login_time;
      if(time > (1000 * 60)*30) {
        store.dispatch(setAuth({
          authorisation: null,
          user: null
        }));
      }
   });


  return (
    <BrowserRouter>
      {header()}
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="propiedades" element={<Propiedades/>}/>
        <Route exact path="tasaciones" element={<Tasaciones/>}/>
        <Route exact path="nosotros" element={<Nosotros/>} />
        <Route exact path="contacto" element={<Contacto/>} />
        <Route exact path="itemdetail" element={<ItemDetail/>} />



        <Route exact path="/login" element={<AdminLogin/>}/>
        <Route exact path="/addproperties" element={<AddProperties/>}/>
        <Route exact path="/allProperties" element={<AllProperties/>}/>
        <Route exact path="/queries" element={<Queries/>}/> {/*consultasGente */}
        <Route exact path="/appraisals" element={<Appraisals/>}/> {/*consultastasaciones */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
