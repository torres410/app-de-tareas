import React from "react";
import TareaFormulario from "./TareaFormulario";

function ListaTareas() {
  return (
    <>
      <TareaFormulario />
      <div className="tareas-lista-contenedor">
        Lista de tareas
      </div>
    </>
  );
}

export default ListaTareas;