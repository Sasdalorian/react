import React from "react";
import "../css/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function Tarea({ texto, completada }) {
  return (
    <div className={completada ? "tarea_contenedor completada" : "tarea_contenedor"}>
      <div className="tarea_texto">
        {texto}
      </div>
      <div className='tarea_contenedor_icono'>
        <AiOutlineCloseCircle className="tarea_icono"/>
      </div>
    </div>
  );
}