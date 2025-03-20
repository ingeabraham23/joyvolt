// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Codigos.css";
import { useRef } from "react";
import html2canvas from "html2canvas";

const Codigos = () => {
  const tabla12231344Ref = useRef(null);
  const tabla6170660Ref = useRef(null);
  const tabla15023616Ref = useRef(null);
  const tabla4323804Ref = useRef(null);
  const tabla4368628Ref = useRef(null);
  const tabla4381120Ref = useRef(null);
  const tabla5533344Ref = useRef(null);
  const tabla5557620Ref = useRef(null);
  const tabla5569684Ref = useRef(null);
  const tabla5642500Ref = useRef(null);
  const tabla5648864Ref = useRef(null);
  const tabla15216080Ref = useRef(null);
  const tabla5571816Ref = useRef(null);
  const tabla5638324Ref = useRef(null);
  const tabla5633544Ref = useRef(null);
  const tabla5537304Ref = useRef(null);
  const tabla5628772Ref = useRef(null);
  const tabla5556232Ref = useRef(null);
  const tabla8979088Ref = useRef(null);
  const tabla4548580Ref = useRef(null);
  // const tabla4548580Ref = useRef(null);

  const capturarTabla = (tabla) => {
    if (!tabla) return;

    html2canvas(tabla).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const link = document.createElement("a");

      // Obtener el nombre desde la celda de la serie (por ejemplo)
      const nombreSerie =
        tabla.querySelector(".celda-codigos-serie")?.textContent.trim() ||
        "captura";

      link.download = `${nombreSerie}.png`;
      link.href = imgData;
      link.click();
    });
  };

  return (
    <div className="contenedor-codigos-joyvolt">
      <h2>Cronología de Letreros.</h2>
      <h1 className="titulo-mes-codigos">OCTUBRE 2024</h1>
      <div className="separador-codigos-joyvolt"></div>

      <span>Fecha de entrega desconocida</span>
      <span>Nombre desconocido</span>
      <table ref={tabla12231344Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n12231344</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">11-10-2024</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/01 OCTUBRE 2024/11-10-2024 SE-n12231344.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla12231344Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span>Fecha de entrega desconocida</span>
      <span>Nombre desconocido</span>
      <table ref={tabla8979088Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n8979088</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">28-10-2024</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/01 OCTUBRE 2024/28-10-2024 SE-n8979088.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla8979088Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <h1 className="titulo-mes-codigos">NOVIEMBRE 2024</h1>

      <div className="separador-codigos-joyvolt"></div>
      <span>Entregado martes 04 de marzo de 2025. Por abraham.</span>
      <span>Gabriel bandala Ruta 01</span>
      <table ref={tabla6170660Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n6170660</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">11-11-2024</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n6170660.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla6170660Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">Heriberto Rojo 20</span>
      <table ref={tabla15023616Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n15023616</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">11-11-2024</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/02 NOVIEMBRE 2024/11-11-2024 SE-n15023616.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla15023616Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>
      {/* ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  ENERO 2025 -  */}
      <div className="separador-codigos-joyvolt"></div>
      <h1 className="titulo-mes-codigos">ENERO 2025</h1>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">Lo trae uno de ruta 01</span>
      <table ref={tabla4323804Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n4323804</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">13-01-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/03 ENERO 2025/13-01-2025 SE-n4323804.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla4323804Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">
        Originalmente de la muerte 46 y actualmente lo trae lobo 28
      </span>
      <table ref={tabla4368628Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n4368628</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">13-01-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/03 ENERO 2025/13-01-2025 SE-n4368628.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla4368628Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">Nombre Desconocido</span>
      <table ref={tabla4548580Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n4548580</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">21-01-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/03 ENERO 2025/21-01-2025 SE-n4548580.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla4548580Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      {/* FEBRERO 2025 -  FEBRERO 2025 -  FEBRERO 2025 -  FEBRERO 2025 -  FEBRERO 2025 -  FEBRERO 2025 -  FEBRERO 2025 - */}
      <div className="separador-codigos-joyvolt"></div>
      <h1 className="titulo-mes-codigos">FEBRERO 2025</h1>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">
        (Entregado sabado 08 de marzo de 2025. Por fernando.)
      </span>
      <span className="detalle-codigos">
        (Lo trae una camioneta de urbanos verdes)
      </span>
      <table ref={tabla4381120Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n4381120</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">01-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/01-02-2025 SE-n4381120.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla4381120Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5533344Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5533344</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5533344.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5533344Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5557620Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5557620</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5557620.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5557620Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5569684Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5569684</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5569684.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5569684Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">
        (Entregado sabado 08 de marzo 2025. Por fernando)
      </span>
      <span className="detalle-codigos">
        (Lo trae una camioneta de urbanos verdes)
      </span>
      <table ref={tabla5633544Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5633544</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5633544.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5633544Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5642500Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5642500</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5642500.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5642500Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5648864Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5648864</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n5648864.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5648864Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla15216080Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n15216080</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">16-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/16-02-2025 SE-n15216080.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla15216080Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Nombre desconocido)</span>
      <table ref={tabla5571816Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5571816</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">18-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/18-02-2025 SE-n5571816.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5571816Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega desconocida)</span>
      <span className="detalle-codigos">(Alejandro Rojo 30)</span>
      <table ref={tabla5638324Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5638324</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">20-02-2025</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/04 FEBRERO 2025/20-02-2025 SE-n5638324.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5638324Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <h1 className="titulo-mes-codigos">MARZO 2025</h1>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">(Fecha de entrega Desconocido)</span>
      <span className="detalle-codigos">(Ruta 01 #81)</span>
      <span className="detalle-codigos">(version 3.6)</span>
      <table ref={tabla5556232Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5556232</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">11-03-25</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/05 MARZO 2025/11-03-2025 SE-n5556232.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5556232Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">
        (Fecha de entrega sabado 15 de marzo)
      </span>
      <span className="detalle-codigos">(Heriberto Rojo 20)</span>
      <span className="detalle-codigos">(version 3.6)</span>
      <table ref={tabla5537304Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5537304</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">12-03-25</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/05 MARZO 2025/12-03-25 SE-n5537304.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5537304Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>

      <div className="separador-codigos-joyvolt"></div>
      <span className="detalle-codigos">
        (Fecha de entrega sabado 15 de marzo)
      </span>
      <span className="detalle-codigos">(JoyBoy Rojo 36)</span>
      <span className="detalle-codigos">(Letrero grande version 3.6)</span>
      <table ref={tabla5628772Ref} className="tabla-codigos">
        <tr>
          <td className="celda-codigos-serie">SE-n5628772</td>
        </tr>
        <tr>
          <td className="celda-codigos-fecha">12-03-25</td>
        </tr>
        <tr>
          <td className="celda-codigos-img">
            <img
              style={{ width: "95%", height: "auto" }}
              src="./codigos/05 MARZO 2025/12-03-25 SE-n5628772.png"
            />
          </td>
        </tr>
      </table>
      <button
        onClick={() => capturarTabla(tabla5628772Ref.current)}
        className="boton-descarga-codigos"
      >
        Descargar Imagen
      </button>
    </div>
  );
};

export default Codigos;
