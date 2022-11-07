// import './App.css';
import React from 'react';
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";


const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];


function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  let searchedTodos = [];

  /* Filtering the todos array based on the searchValue. */
  if(!searchValue.length >= 1){
    searchedTodos = todos
  } else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
  }
    
  const completedTodos = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;



/**
 * It takes in a text parameter, finds the index of the todo with that text, creates a new array of
 * todos, and then toggles the completed property of the todo at that index.
 * @param text - the text of the todo that was clicked
 */
  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed === true ? newTodos[todoIndex].completed = false: newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }


  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
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

export default App;
