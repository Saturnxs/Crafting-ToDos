// import './App.css';
import React from 'react';
import { AppUI } from './AppUI';

const defaultTodos = [
  {text:'Cortar cebolla', completed:false},
  {text:'Tormar el curso de intro a react', completed:false},
  {text:'Llorar con la llorona', completed:false}
];


function App() {
/* Creating a state variable called todos and setting it to the defaultTodos array. It is also creating
a state variable called searchValue and setting it to an empty string. */
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');



  // SEARCH BEHAVIOUR

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

  

  // COUNTER BEHAVIOUR
  
  /* Filtering the todos array and returning the length of the array. */
  const completedTodosNumber = todos.filter(todo => todo.completed).length;
  /* Counting the number of todos in the todos array. */
  const totalTodosNumber = todos.length;


  
  // ITEMS BEHAVIOUR

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
/**
 * The deleteTodo function takes a text argument, finds the index of the todo with the matching text,
 * creates a new array with the todos, removes the todo at the index, and sets the todos to the new
 * array.
 */
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  

  /* Returning the AppUI component and passing in the props. */
  return (
    <AppUI
      totalTodos = {totalTodosNumber}
      completedTodos = {completedTodosNumber}
      searchValue = {searchValue}
      setSearchValue = {setSearchValue}
      searchedTodos = {searchedTodos}
      completeTodo = {completeTodo}
      deleteTodo = {deleteTodo}
    />
  );
}

export default App;
