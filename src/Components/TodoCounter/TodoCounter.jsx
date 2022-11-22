import { useContext } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const { totalTodosNumber, completedTodosNumber, loading } = useContext(TodoContext)

  return (
    <>
      {completedTodosNumber !== totalTodosNumber || loading ?
      <h2 className='TodoCounter'>Completaste { completedTodosNumber } de { totalTodosNumber } tareas</h2> : 
      <h2 className='TodoCounter'>¡Felicidades! ¡Has completado todas tus tareas!</h2>}
      
    </>
  );
}

export { TodoCounter };