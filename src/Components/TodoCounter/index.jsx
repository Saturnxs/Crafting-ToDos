import './TodoCounter.css';

function TodoCounter(props) {
  const { totalTodos, completedTodos } = props;

  return (
    <h2 className='TodoCounter'>Has completado {completedTodos} de {totalTodos} TODOs</h2>
  );
}

export { TodoCounter };