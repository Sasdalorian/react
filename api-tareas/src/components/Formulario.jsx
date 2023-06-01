import React, { useState } from "react";
import { v4 as uuidv4} from "uuid"
import "../css/Formulario.css"

export function Formulario(props) {

  const [input, setInput] = useState("");

  const manejarCambio = e => {
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    e.preventDefault();

    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    };
    
    props.onSubmit(tareaNueva);
  };

  return (
    <form className="tarea_formulario" onSubmit={manejarEnvio}>
      <input
        className="tarea_input"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="tarea_button">Agregar Tarea</button>
    </form>
  );
}