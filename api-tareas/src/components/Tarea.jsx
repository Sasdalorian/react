import React from "react";
import "../css/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  return (
    <div className={completada ? "tarea_contenedor completada" : "tarea_contenedor"}>
      <div className="tarea_texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className='tarea_contenedor_icono' onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea_icono"/>
      </div>
    </div>
  );
};