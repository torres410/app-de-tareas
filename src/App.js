import './App.css';
import "../src/hojas-de-estilo/Tarea.css";
import ListaTareas from './componentes/ListaTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaTareas />
      </div>
    </div>
  );
}

export default App;