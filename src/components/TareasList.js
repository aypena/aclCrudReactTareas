import React, { useState } from 'react';
import { format } from 'date-fns';
import Modal from './Modal'; 
import { useGetTareasQuery, useEliminarTareaMutation, useActualizarTareaMutation } from "./api/apiSlice";
import '../STareasList.css'; 

function TareasList() {
  const { data: tareas, isError, isLoading, error } = useGetTareasQuery();
  const [eliminarTarea] = useEliminarTareaMutation();
  const [actualizarTarea] = useActualizarTareaMutation();
  const [selectedTarea, setSelectedTarea] = useState(null);

  const handleModificar = (tarea) => {
    setSelectedTarea(tarea);
  };

  if (isLoading) return <div>Cargando...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div>
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
              <td>{format(new Date(tarea.fechaCreacion), 'dd-MM-yyyy hh:mm')}</td>
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
                  }}
                />
              </td>
              <td>
                <button onClick={() => eliminarTarea(tarea.identificador)}>Eliminar</button>
                <button onClick={() => handleModificar(tarea)}>Modificar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedTarea && (
        <Modal tarea={selectedTarea} onClose={() => setSelectedTarea(null)} />
      )}
    </div>
  );
}

export default TareasList;