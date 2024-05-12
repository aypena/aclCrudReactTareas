import TareasForm from './components/TareasForm';
import TareasList from './components/TareasList';

function App(){
  return(
    <>
    <h1 style={{ textAlign: 'center' }}>CRUD Tareas  Empresa ACL</h1>
     <TareasForm/>
    <TareasList/>
    </>
    
  )
}
export default App