import TareasForm from './components/TareasForm';
import TareasList from './components/TareasList';

function App(){
  return(
    <>
    <h1 style={{ textAlign: 'center' }}>CRUD Tareas</h1>
     <TareasForm/>
    <TareasList/>
    </>
    
  )
}
export default App