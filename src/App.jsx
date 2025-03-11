// eslint-disable-next-line no-unused-vars
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inventario from "./components/Inventario";
import Ventas from "./components/Ventas";
import Administracion from "./components/Administrar";
import Catalogo from "./components/catalogo";
import Codigos from "./components/Codigos";
import Kit from "./components/Kit";

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
            <Route path="/codigos" element={<Codigos />} />
            <Route path="/kit" element={<Kit />} />
          </Routes>
        </div>
    </HashRouter>
  );
}

export default App;