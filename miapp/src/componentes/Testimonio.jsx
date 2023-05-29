import React from "react";
import "../css/Testimonio.css";
import { Personas } from '../personas';

function Testimonio(props) {
  return (
    <div className="contenedor_testimonio">
      <img 
        className="imagen_testimonio"
        src={require(`../img/${props.img}`)}
        alt= {props.img}
      />
      <div className="contenedorTexto_testimonio">
        <p className="nombrePais_testimonio"> <strong>{props.nombre}</strong> en {props.pais}</p>
        <p className="cargo_testimonio"> {props.cargo} en <strong>{props.empresa}</strong></p>
        <p className="texto_testimonio"> {props.texto}</p>
      </div>
    </div>
  );
};

export function generarTestimonios() {
  return Personas.map((persona) => (
    <Testimonio
      nombre={persona.nombre}
      pais={persona.pais}
      img={persona.img}
      cargo={persona.cargo}
      empresa={persona.empresa}
      texto={persona.texto}
    />
  ));
}