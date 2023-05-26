import React from "react";
import "../css/Testimonio.css";

function Testimonio() {
  return (
    <div className="contenedor_testimonio">
      <img 
        className="imagen_testimonio"
        src={require("../img/krauser.jfif")}
        alt="Lobo.png"
      />
      <div className="contenedorTexto_testimonio">
        <p className="nombrePais_testimonio"> Nombre y Pais del Testimonio</p>
        <p className="cargo_testimonio"> Cargo del Testimonio</p>
        <p className="texto_testimonio"> Texto del Testimonio</p>
      </div>

    </div>
  );
};

export default Testimonio;