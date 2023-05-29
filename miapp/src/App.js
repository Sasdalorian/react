import './css/App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Comentarios de Prueba</h1>

        <Testimonio 
          nombre= "Krauser"
          pais= "Japon"
          img= "krauser.jfif"
          cargo= "Guitarrista y Voz Principal"
          empresa= "Detroit Metal City"
          texto= "Vivamus dictum congue iaculis. Phasellus et nisi scelerisque, suscipit orci nec, dignissim erat. Donec ut purus in odio tempus facilisis quis eleifend risus. Cras vestibulum, enim blandit ornare varius, orci turpis fringilla ipsum, in finibus nisi turpis eget lectus."
        />
        <Testimonio 
          nombre= "Neferpitou"
          pais= "Continente Oscuro"
          img= "neferpitou.jfif"
          cargo= "Guardia Real"
          empresa= "Hormigas Quimera"
          texto= "Vivamus dictum congue iaculis. Phasellus et nisi scelerisque, suscipit orci nec, dignissim erat. Donec ut purus in odio tempus facilisis quis eleifend risus. Cras vestibulum, enim blandit ornare varius, orci turpis fringilla ipsum, in finibus nisi turpis eget lectus."
          />
        <Testimonio 
          nombre= "Lobo"
          pais= "Estados Unidos"
          img= "LOBO.png"
          cargo= "Destructor de Casas"
          empresa= "AntiCerdos"
          texto= "Vivamus dictum congue iaculis. Phasellus et nisi scelerisque, suscipit orci nec, dignissim erat. Donec ut purus in odio tempus facilisis quis eleifend risus. Cras vestibulum, enim blandit ornare varius, orci turpis fringilla ipsum, in finibus nisi turpis eget lectus."
        />

      </div>

    </div>
  );
}

export default App;
