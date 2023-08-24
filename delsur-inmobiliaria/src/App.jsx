import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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



function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Inicio/>} />
        <Route exact path="propiedades" element={<Propiedades/>}/>
        <Route exact path="tasaciones" element={<Tasaciones/>}/>
        <Route exact path="nosotros" element={<Nosotros/>} />
        <Route exact path="contacto" element={<Contacto/>} />


        <Route exact path="login" element={<AdminLogin/>}/>
        <Route exact path="admin-nav" element={<AdminNav/>}/>
        <Route exact path="addproperties" element={<AddProperties/>}/>
        <Route exact path="queries" element={<Queries/>}/>
        <Route exact path="appraisals" element={<Appraisals/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
