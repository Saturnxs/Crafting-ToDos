import { createContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext()

function TodoProvider({ children }){

    // STATES
  
    /* Using the useLocalStorage hook to set the todos state to the value of the local storage item
    'TODOS_V1' and if that item does not exist, it sets the todos state to an empty array. */
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');


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

    /*If the todo is completed, set it to false, otherwise set it to true. */
    const completeTodo = (text) => {
        /* Finding the index of the todo with the matching text, creating a new array with all the todos
        except the one with the matching text, and saving the new array to local storage. */
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed === true ? newTodos[todoIndex].completed = false: newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    }

    /**
     * The deleteTodo function takes a text argument, finds the index of the todo with that text, creates
     * a new array with all the todos except the one with the matching text, and saves the new array to
     * local storage.
     */
    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }
    
    return (
        <TodoContext.Provider value={{
            loading,
            error,
            totalTodosNumber,
            completedTodosNumber,
            searchValue,
            setSearchValue,
            searchedTodos,
            completeTodo,
            deleteTodo,
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
