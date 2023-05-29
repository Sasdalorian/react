import React from 'react';
import './css/App.css';
import { generarTestimonios } from './componentes/Testimonio';


function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Comentarios de Prueba</h1>
        {generarTestimonios()}
      </div>
    </div>
  );
}

export default App;
