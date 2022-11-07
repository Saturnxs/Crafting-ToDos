import './CreateTodoButton.css';

function CreateTodoButton() {

    const onClickButton = (message) => {
        alert(message);
    }

    return (
      <button
        className='CreateTodoButton'
        onClick={() => onClickButton('onClick')}
      >
        +
      </button>
    );
  }
  
  export { CreateTodoButton };