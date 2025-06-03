// eslint-disable-next-line no-unused-vars
import React, { useRef } from "react";
import html2canvas from "html2canvas";

import "./Simbolos.css";

// Arreglo de caracteres
const caracteres = [
  "space",
  "!",
  "comillas",
  "#",
  "$",
  "%",
  "&",
  "comilla",
  "(",
  ")",
  "*",
  "+",
];

const caracteres2 = [
  "<",
  "=",
  ">",
  "?",
  "@",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
];

const caracteres3 = [
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
];

const caracteres4 = [
  "T",
  "U",
  "V",
  "W",
  "x",
  "y",
  "z",
];
// Arreglo con los nombres de los archivos de imagen (sin ruta)
const imagenes = [
  "01.png",
  "02.png",
  "03.png",
  "04.png",
  "05.png",
  "06.png",
  "07.png",
  "08.png",
  "09.png",
  "10.png",
  "11.png",
  "12.png",
];
const imagenes2 = [
  "13.png",
  "14.png",
  "15.png",
  "16.png",
  "17.png",
  "18.png",
  "19.png",
  "20.png",
  "21.png",
  "22.png",
  "23.png",
  "24.png",
];

const imagenes3 = [
  "25.png",
  "26.png",
  "27.png",
  "28.png",
  "29.png",
  "30.png",
  "31.png",
  "32.png",
  "33.png",
  "34.png",
  "35.png",
  "36.png",
];

const imagenes4 = [
  "37.png",
  "38.png",
  "39.png",
  "40.png",
  "41.png",
  "42.png",
  "43.png",
];

function capturarTabla(tabla, nombre) {
  html2canvas(tabla, { scale: 8 }).then(function (canvas) {
    const pngUrl = canvas.toDataURL("image/png");
    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${nombre}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
}

const Simbolos = () => {
  const tabla01Ref = useRef(null);
  const tabla02Ref = useRef(null);
  const tabla03Ref = useRef(null);
  const tabla04Ref = useRef(null);
  const tablatiposRef = useRef(null);

  const tablaStandardRef = useRef(null);

  return (
    <div>
      <div ref={tabla01Ref}>
      <div className="titulo-simbolos">Tabla 01</div>
        <div className="tabla-simbolos">
          {caracteres.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`/joyvolt/simbolos/${imagenes[index]}`}
                alt={`Símbolo`}
                className="imagen-simbolo"
              />
            </div>
          ))}
          
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla01Ref.current, "Tabla01")}
      >
        📸 Capturar Tabla 01
      </button>

      <div ref={tabla02Ref}>
        <div className="titulo-simbolos">Tabla 02</div>
        <div className="tabla-simbolos">
          {caracteres2.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`/joyvolt/simbolos/${imagenes2[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla02Ref.current, "Tabla02")}
      >
        📸 Capturar Tabla 02
      </button>


      <div ref={tabla03Ref}>
        <div className="titulo-simbolos">Tabla 03</div>
        <div className="tabla-simbolos">
          {caracteres3.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`/joyvolt/simbolos/${imagenes3[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla03Ref.current, "Tabla03")}
      >
        📸 Capturar Tabla 03
      </button>

      <div ref={tabla04Ref}>
        <div className="titulo-simbolos">Tabla 04</div>
        <div className="tabla-simbolos-grandes">
          {caracteres4.map((char, index) => (
            <div className="celda-simbolo" key={index}>
              <div className="caracter">{char}</div>
              <img
                src={`/joyvolt/simbolos/${imagenes4[index]}`}
                alt={`Símbolo ${char}`}
                className="imagen-simbolo-grande"
              />
            </div>
          ))}
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tabla04Ref.current, "Tabla04")}
      >
        📸 Capturar Tabla 04
      </button>

      <div>
        <table className="tabla-tipos" ref={tablatiposRef}>
          <thead>
            <tr>
              <th colSpan={2} className="celda-tipos-titulo" >Precio de Letreros iLED PRO</th>
            </tr>
            <tr></tr>
          </thead>
          <tbody>
          <tr><td className="celda-vacia"></td></tr>
            <tr><td className="celda-tipos-encabezado" colSpan={2}>$ 1,800.00</td></tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">51 cm. x 13 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">1024 Leds.</td>
            </tr>
            <tr><td className="celda-vacia"></td></tr>
            <tr><td className="celda-tipos-encabezado" colSpan={2}>$ 2,400.00</td></tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">64 cm. x 16 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">1800 Leds.</td>
            </tr>
            <tr><td className="celda-vacia"></td></tr>
            <tr><td className="celda-tipos-encabezado" colSpan={2}>$ 2,950.00</td></tr>
            <tr>
              <td className="celda-tipos">Dimensiones: </td>
              <td className="celda-tipos">64 cm. x 16 cm. x 3 cm.</td>
            </tr>
            <tr>
              <td className="celda-tipos">Resolucion: </td>
              <td className="celda-tipos">4096 Leds.</td>
            </tr>
            <tr><td className="celda-vacia"></td><br></br></tr>
            <tr><td className="terminos" colSpan={2} >Pido un anticipo del 50%. Y al entregar pido el completo.</td></tr>
            <tr><td className="terminos" colSpan={2} >3 meses de garantía.</td></tr>
            <tr><td className="terminos" colSpan={2} >Si lo quemas no hay garantia.</td></tr>
            <tr><td className="terminos" colSpan={2} >Sigue las recomendaciones del videotutorial.</td></tr>
            <tr><td className="terminos" colSpan={2} >☎ 231 159 1893. Solo Whatsapp.</td></tr>
            <tr><td className="terminos" colSpan={2} >☎ 231 128 4412. Solo Whatsapp.</td></tr>
            <tr><td className="copyright" colSpan={2}>©2025 JoyBoy & Ferxxo & JoyVolt Corporation.</td></tr>
          </tbody>
        </table>
      </div>
      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tablatiposRef.current, "Tabla Precios")}
      >
        📸 Capturar Tabla Precios
      </button>
      <br></br>
      <br></br>



      <div ref={tablaStandardRef}>
      <div className="titulo-simbolos">Estandarizacion de caracteres</div>

      <div className="tabla-simbolos-rutas">
              <div className="caracter-titulo"> Uso</div>
              <div className="caracter-titulo"> Ruta</div>
              <div className="caracter-titulo"> Ejemplo</div>
        </div>

        <div className="tabla-simbolos-rutas">
              <div className="caracter-talzintan"> Punto antes</div>
              <div className="caracter-talzintan"> Parajes</div>
              <div className="caracter-talzintan"> .47</div>
        </div>
        <div className="tabla-simbolos-rutas">
              <div className="caracter-talzintan"> Punto despues</div>
              <div className="caracter-talzintan"> Humeros</div>
              <div className="caracter-talzintan"> 47.</div>
        </div>
        <div className="tabla-simbolos-rutas">
              <div className="caracter-sosa"> Punto antes</div>
              <div className="caracter-sosa"> Aguardientera</div>
              <div className="caracter-sosa"> .135</div>
        </div>
        <div className="tabla-simbolos-rutas">
              <div className="caracter-sosa"> Punto despues</div>
              <div className="caracter-sosa"> Huapaltepec</div>
              <div className="caracter-sosa"> 30.</div>
        </div>

        <div className="tabla-simbolos-rutas">
              <div className="caracter-tezo"> Punto antes</div>
              <div className="caracter-tezo"> Tenextepec</div>
              <div className="caracter-tezo"> .133</div>
        </div>

        <div className="tabla-simbolos-rutas">
              <div className="caracter-c"> Guion antes</div>
              <div className="caracter-c"> C25</div>
              <div className="caracter-c"> -25</div>
        </div>
        <div className="pie-copyright">© 2025 JoyBoy</div>
      </div>

      <button
        className="boton-capturar-simbolos"
        onClick={() => capturarTabla(tablaStandardRef.current, "Tabla caracteres")}
      >
        📸 Capturar Tabla Caracteres
      </button>

      <br></br>

    </div>
  );
};

export default Simbolos;
