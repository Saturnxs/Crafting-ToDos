import { useEffect, useState } from 'react';

function useLocalStorage(itemName, initialValue) {

    /* Setting the item to the parsedItem. */
    const [item, setItem] = useState(initialValue);
    /* Setting the loading state to true. */
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false);



    useEffect(() => {
      setTimeout(() => {
        try{
            /* Getting the item from localStorage. */
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem = initialValue;
            /* If localStorageItem is not true, then set the item in localStorage. If it is true, then parse the item from localStorage. */
            !localStorageItem ? localStorage.setItem(itemName, JSON.stringify(initialValue)) : parsedItem = JSON.parse(localStorageItem);
          
            setItem(parsedItem);
            setLoading(false);
        }catch(error){
          setError(error)
        }
      }, 1500);
    });
  
  
    /**
     * SaveItem is a function that takes a newItem as an argument, stringifies the newItem, sets the
     * itemName to the stringified newItem, and then sets the item to the newItem.
     */
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
    };
  
    /* Returning the item and the saveItem function. */
    return { item, saveItem, loading, error };
  }

  export { useLocalStorage };