import React from "react";

export function Boton(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor != ".") && (valor != "=");
  };

  return (
    <div 
      className={`boton_contenedor ${esOperador(props.children) ? 'operador' : null}`}>
      
      {props.children}
    </div>
  )
}