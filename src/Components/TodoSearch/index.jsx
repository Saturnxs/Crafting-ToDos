import './TodoSearch.css';

function TodoSearch(props) {

    const { searchValue, setSearchValue } = props;

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }

    return (
        <input
            className='TodoSearch'
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
  }
  
  export { TodoSearch };