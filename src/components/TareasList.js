import React from 'react';
import { useGetTareasQuery, useEliminarTareaMutation, useActualizarTareaMutation } from "./api/apiSlice";

import '../STareasList.css'; 

function TareasList() {
  const { data: tareas, isError, isLoading, error } = useGetTareasQuery();
  const [eliminarTarea] = useEliminarTareaMutation();
  const [actualizarTarea] = useActualizarTareaMutation();
 
 

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <table className="tareas-table"> 
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Fecha de Creación</th>
          <th>Vigente</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map(tarea => (
          <tr key={tarea.identificador}>
            <td>{tarea.descripcion}</td>
            <td>{tarea.fechaCreacion}</td>
            <td>
              <input
                type="checkbox"
                id={tarea.identificador}
                checked={tarea.vigente}
                onChange={(e) => {
                  actualizarTarea({
                    ...tarea,
                    vigente: e.target.checked
                  });
                  console.log(e.target.checked);
                }}
              />
            </td>
            <td>
              <button onClick={() => eliminarTarea(tarea.identificador)}>Eliminar</button>
              <button >Modificar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TareasList;