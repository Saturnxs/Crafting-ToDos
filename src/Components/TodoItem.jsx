import './TodoItem.css';

function TodoItem(props){
    const { text, completed } = props;
    return(
        <li className="TodoItem">
            <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`}>
                √
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <span className="Icon Icon-delete">
                X
            </span>
        </li>
    )
}

export { TodoItem };