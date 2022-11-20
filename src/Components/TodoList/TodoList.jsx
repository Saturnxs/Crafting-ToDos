import './TodoList.css';

function TodoList({ children }) {
    return(
        <section>
            <div className='listItems'>
                {children}
            </div>
        </section>
    )
}

export { TodoList };