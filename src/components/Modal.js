import React, { useState } from 'react';

function Modal({ tarea, onUpdate }) {
  const [descripcion, setDescripcion] = useState(tarea.descripcion);
  const [fechaCreacion, setFechaCreacion] = useState(tarea.fechaCreacion);
  const [vigente, setVigente] = useState(tarea.vigente);

  const handleUpdate = () => {
    onUpdate({
      ...tarea,
      descripcion,
      fechaCreacion,
      vigente
    });
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
          value={fechaCreacion}
          onChange={(e) => setFechaCreacion(e.target.value)}
        />
        <label htmlFor="vigente">Vigente:</label>
        <input
          type="checkbox"
          id="vigente"
          checked={vigente}
          onChange={(e) => setVigente(e.target.checked)}
        />
        <button onClick={handleUpdate}>Guardar</button>
      </div>
    </div>
  );
}

export default Modal;