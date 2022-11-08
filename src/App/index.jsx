// import './App.css';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext/TodoContext';


function App() {  

  /* Returning the AppUI component and passing in the props. */
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
