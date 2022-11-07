function TodoItem(props){
    const { text } = props;
    return(
        <li>
            <span>C</span>
            <p>{text}</p>
            <span>x</span>
        </li>
    )
}

export { TodoItem };