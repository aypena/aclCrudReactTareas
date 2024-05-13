import React, { useState } from 'react';
import { useActualizarTareaMutation } from "./api/apiSlice";
function Modal({ tarea, onUpdate, onClose }) {
    
  const [descripcion, setDescripcion] = useState(tarea.descripcion);
  const [fechaCreacion, setFechaCreacion] = useState(tarea.fechaCreacion);
  const [vigente, setVigente] = useState(tarea.vigente);
  const [actualizarTarea] = useActualizarTareaMutation();

  const handleGuardar = () => {
    actualizarTarea({
      ...tarea,
      descripcion,
      fechaCreacion,
      vigente
    });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modificar Tarea</h2>
        <label htmlFor="descripcion">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <label htmlFor="fechaCreacion">Fecha de Creación:</label>
        <input
  type="datetime-local"
  id="fechaCreacion"
  value={fechaCreacion.slice(0, 16)} // Elimina los milisegundos y el desplazamiento de zona horaria
  onChange={(e) => setFechaCreacion(e.target.value)}
/>
        <label htmlFor="vigente">Vigente:</label>
        <input
          type="checkbox"
          id="vigente"
          checked={vigente}
          onChange={(e) => setVigente(e.target.checked)}
        />

        <button onClick={handleGuardar}>Guardar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
}

export default Modal;