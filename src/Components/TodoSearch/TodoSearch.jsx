import { useContext } from 'react';
import { TodoContext } from '../../TodoContext/TodoContext';
import './TodoSearch.css';

function TodoSearch() {

    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    }

    return (
        <section className='SearchBarSection'>
            <div className='SearchBarInputGroup'>
                <i className="SearchBarIcon"></i>
                <input
                    className='TodoSearch'
                    placeholder="Buscar"
                    value={searchValue}
                    onChange={onSearchValueChange}
                />
            </div>
            <div>
                
            </div>
        </section>
    );
  }
  
  export { TodoSearch };