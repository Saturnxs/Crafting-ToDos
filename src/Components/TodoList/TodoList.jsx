import './TodoList.css';

function TodoList({ children }) {
    return(
        <section>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export { TodoList };