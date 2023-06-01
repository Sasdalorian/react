import React from "react";
import logoSas from "../img/logoSas.png"
import "../css/Logo.css";

export const Logo = () => {
  return (
    <div className="logo_contenedor">
      <img src={logoSas} className="logo" alt="No se ha podido cargar el logo."/>
    </div>
  )
}