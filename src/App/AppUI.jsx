import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch/TodoSearch";
import { TodoList } from "../Components/TodoList/TodoList";
import { TodoItem } from "../Components/TodoItem/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton/CreateTodoButton";

function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    
    return(
        <>
            <TodoCounter
                totalTodos={totalTodos}
                completedTodos={completedTodos}
            />    
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList>
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