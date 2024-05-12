import { useCrearTareaMutation } from "./api/apiSlice";
import '../STareasList.css';  

function TareasForm() {
  const [crearTarea] = useCrearTareaMutation();

  const handleSubmint = (e) => {
    e.preventDefault();

    const descripcion = e.target.elements.descripcion.value.trim();
    const fechaCreacion = e.target.elements.fechaCreacion.value;
    const vigente = e.target.elements.vigente.checked;

    const fechaActual= new Date().toISOString().slice(0,16);
    if (fechaCreacion>fechaActual){
      alert("La fecha de creacion debe ser menor o igual al presente")
      return;
    }

    if (!descripcion || !fechaCreacion){
      alert("Por favor, complete lodos los campos")
      return;
    }

    crearTarea({
      descripcion,
      fechaCreacion,
      vigente
    });

      e.target.elements.descripcion.value='';
      e.target.elements.fechaCreacion.value='';
      e.target.elements.vigente.checked=false;

    console.log(descripcion, fechaCreacion, vigente);
  };

  return (
    <form className="tareas-form" onSubmit={handleSubmint}>
      <input type="text" name="descripcion" placeholder="Descripción" />
      <input type="datetime-local" name="fechaCreacion" placeholder="Fecha de Creación" defaultValue="" />
      <label htmlFor="vigente">
        <input type="checkbox" name="vigente" id="vigente" />
        Vigente
      </label>
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default TareasForm;