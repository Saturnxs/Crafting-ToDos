import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoForm.css'

function TodoForm(){

    const { setOpenModal, createTodo } = useContext(TodoContext);

    const [ newTodoText, setNewTodoText ] = useState('')

    const onCancel = () => {
        setOpenModal(false);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createTodo(newTodoText);
        setOpenModal(false);
    }

    const onWrite = (event) => {
        setNewTodoText(event.target.value);
    }

    return(
        <form onSubmit={onCreate}>
            <label>Agrega un nuevo TODO</label>
            <textarea 
                placeholder='Hacer algo increible luego de dormir...'
                value={newTodoText}
                onChange={onWrite}
            ></textarea>
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar
                </button>
                <button
                    className='TodoForm-button TodoForm-button--add'
                    type='submit'
                >Crear
                </button>
            </div>
        </form>
    );
}

export { TodoForm };