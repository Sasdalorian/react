import './App.css';
import logoSas from './img/logoSas.png'

//IMPORT COMPONENTES
import { Boton } from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';

// IMPORT CSS
import "./css/Boton.css"

function App() {
  return (
    <div className="App">
      <div className='logoSas_contenedor'>
        <img 
          src={logoSas}
          className="logoSas"
          alt="No se ha podido cargar el logo."
        />
      </div>

      <div className='calculadora_contenedor'>
        <div className='fila'>
          <Pantalla />
        </div>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>+</Boton>
        </div>

        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>-</Boton>
        </div>

        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>=</Boton>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>/</Boton>
        </div>
        <div className='fila'>
        <Boton>C</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
