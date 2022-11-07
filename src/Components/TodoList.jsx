import './TodoList.css';

function TodoList(props) {
    const { children } = props;
    return(
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export { TodoList };