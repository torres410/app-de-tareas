import './App.css';
import "../src/hojas-de-estilo/Tarea.css";
import TareaFormulario from './componentes/TareaFormulario';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <TareaFormulario>
          
        </TareaFormulario>
      </div>
    </div>
  );
}

export default App;
