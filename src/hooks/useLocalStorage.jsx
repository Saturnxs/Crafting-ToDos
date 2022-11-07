import { useState } from 'react';

function useLocalStorage(itemName, initialValue) {

    /* Getting the item from localStorage. */
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem = initialValue;
    /* If localStorageItem is not true, then set the item in localStorage. If it is true, then parse the item from localStorage. */
    !localStorageItem ? localStorage.setItem(itemName, JSON.stringify(initialValue)) : parsedItem = JSON.parse(localStorageItem);
    
  
    /* Setting the item to the parsedItem. */
    const [item, setItem] = useState(parsedItem);
    
  
    /**
     * SaveItem is a function that takes a newItem as an argument, stringifies the newItem, sets the
     * itemName to the stringified newItem, and then sets the item to the newItem.
     */
    const saveItem = (newItem) => {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem)
      setItem(newItem);
    };
  
    /* Returning the item and the saveItem function. */
    return [ item, saveItem ]
  }

  export { useLocalStorage };