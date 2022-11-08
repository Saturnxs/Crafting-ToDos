import { useContext } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './CreateTodoButton.css';

function CreateTodoButton() {

    const { openModal, setOpenModal } = useContext(TodoContext);

    const toggleModal = () => {
      setOpenModal(!openModal)
    };

    return (
      <button
        className='CreateTodoButton'
        onClick={toggleModal}
      >
        +
      </button>
    );
  }
  
  export { CreateTodoButton };