import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import './TodoPlaceholder.css'

function TodoPlaceholder() {
    return (
        <div className='todo-placeholder'>
            <CreateTodoButton/>
            <div>
                <p>No tienes tareas</p>
                <p>¡Creemos una!</p>
            </div>
        </div>)
}

export { TodoPlaceholder };