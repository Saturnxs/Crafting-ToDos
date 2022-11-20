import './TodoItem.css';

function TodoItem({ text, completed, onComplete, onDelete }){

    return(
        <div className={`TodoItem ${completed && 'TodoItem--completed'}`}>
            <i
                className={`Icon Icon-check ${completed? 'Icon-check--complete':'Icon-check--todo'}`}
                onClick={onComplete}
            >
            </i>
            <p
                className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}
            >
                {text}
            </p>
            <i
                className="Icon Icon-delete"
                onClick={onDelete}
            >
            </i>
        </div>
    )
}

export { TodoItem };