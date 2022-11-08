import { useContext } from "react";
import { TodoCounter } from "../Components/TodoCounter/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../TodoContext/TodoContext";

function AppUI(){
    const { error, loading, searchedTodos, completeTodo, deleteTodo } = useContext(TodoContext);

    return(
        <>
            <TodoCounter />    
            <TodoSearch />
            <TodoList>
                {error && <p>Ha ocurrido un error...</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>¡Crea tu primer TODO!</p>}

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
            <CreateTodoButton />
        </>
    );
}

export { AppUI };