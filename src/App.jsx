// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inventario from "./components/Inventario";
import Ventas from "./components/Ventas";
import Administracion from "./components/Administrar";
import Catalogo from "./components/catalogo";

function App() {
  return (
    <HashRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Inventario />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/administar" element={<Administracion />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;