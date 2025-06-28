// eslint-disable-next-line no-unused-vars
import React from "react";
import "./GifGallery.css";

const gifList = [
  "donkey.gif",
  "honda.gif",
  "ken.gif",
  "kong_music.gif",
  "mario_bros.gif",
  "mario_turtle.gif",
  "marios.gif",
  "pacman.gif",
  "ryu.gif",
  "ryu_cammy.gif",
  "yoshi.gif",

  // Agrega aquí todos los nombres de tus GIFs
];

const formatearNombre = (nombre) => {
  return nombre
    .replace(/\.gif$/i, "") // quitar extensión .gif
    .replace(/_/g, " ") // reemplazar guiones bajos por espacios
    .replace(/\b\w/g, (l) => l.toUpperCase()); // poner mayúscula a cada palabra
};

const GifGallery = () => {
  return (
    <div className="galeria-container">
      <div className="galeria-grid">
        {gifList.map((gif, index) => (
          <div key={index} className="gif-card">
            <img
              src={`/joyvolt/gifs/${gif}`}
              alt={`GIF ${index}`}
              className="gif-imagen"
            />
            <p className="gif-nombre">{formatearNombre(gif)}</p>
            <a
              href={`/joyvolt/gifs/${gif}`}
              download
              className="boton-descargar"
            >
              Descargar
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GifGallery;
