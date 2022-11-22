import { useContext } from "react";
import { TodoContext } from "../TodoContext/TodoContext";
import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
import { Modal } from "../Components/Modal/Modal";
import { TodoForm } from "../Components/TodoForm/TodoForm";
import { TopBannner } from "../Components/TopBanner/TopBanner"
import { Loader } from "../Components/Loader/Loader";
import { TodoPlaceholder } from "../Components/TodoPlaceholder/TodoPlaceholder";

function AppUI(){
    const { 
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal
    } = useContext(TodoContext);

    return(
        <>
            <TopBannner />
            <TodoCounter />    
            <TodoSearch />
            <TodoList>
                {error && <p>Ha ocurrido un error...</p>}
                {loading && <Loader/>}
                {(!loading && !searchedTodos.length) && <TodoPlaceholder/>}

                {searchedTodos.map(todo =>(
                    <TodoItem
                        key = {todo.text}
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = {() => completeTodo(todo.text)}
                        onDelete = {()=> deleteTodo(todo.text)}
                    />
                    ))}
            </TodoList>

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            {(searchedTodos.length) && <CreateTodoButton />}
        </>
    );
}

export { AppUI };