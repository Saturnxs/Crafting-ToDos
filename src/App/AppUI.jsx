import React from 'react'

import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";

function AppUI(props){
    const {
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = props
    
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