import { useContext, useState } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoForm.css'

function TodoForm(){

    const { setOpenModal, createTodo } = useContext(TodoContext);

    const [ newTodoText, setNewTodoText ] = useState('');
    

    const onCancel = () => {
        setOpenModal(false);
    }

    const onCreate = (event) => {
        event.preventDefault();
        createTodo(newTodoText);
        setOpenModal(false);
    }

    const onWrite = (event) => {
        if (newTodoText.length < 70 || newTodoText.length > event.target.value.length){
            setNewTodoText(event.target.value);
        } 
    }
    
    return(
        <form onSubmit={onCreate}>
            <i className='icon-form'></i>
            <label>Agrega una nueva tarea</label>
            <textarea 
                placeholder='Hacer algo increible después de la siesta...'
                value={newTodoText}
                onChange={onWrite}
            ></textarea>
            <label>{newTodoText.length}</label>
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >Cancelar
                </button>
                <button
                    className={`TodoForm-button ${newTodoText.length === 0 || newTodoText.length === 70 ? 'TodoForm-button--invalid' : 'TodoForm-button--add'}`}
                    type='submit'
                    disabled={newTodoText.length === 0 || newTodoText.length === 70}
                >Crear
                </button>
            </div>
        </form>
    );
}

export { TodoForm };