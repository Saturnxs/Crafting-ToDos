import { useContext } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const { totalTodosNumber, completedTodosNumber } = useContext(TodoContext)

  return (
    <>
      {completedTodosNumber !== totalTodosNumber ?
      <h2 className='TodoCounter'>Completaste { completedTodosNumber } de { totalTodosNumber } tareas</h2> : 
      <h2 className='TodoCounter'>¡Felicidades! ¡Has completado todas tus tareas!</h2>}
      
    </>
  );
}

export { TodoCounter };