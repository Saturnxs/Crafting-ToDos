import { useContext } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoCounter.css';

function TodoCounter() {

  const { totalTodosNumber, completedTodosNumber } = useContext(TodoContext)

  return (
    <h2 className='TodoCounter'>Has completado { completedTodosNumber } de { totalTodosNumber } tareas</h2>
  );
}

export { TodoCounter };