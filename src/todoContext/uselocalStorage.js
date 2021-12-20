import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [loading, setloading] = React.useState(true);
  const [error, seterror] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
          
        } else {
          parsedItems = JSON.parse(localStorageItem);   
        }
        setItem(parsedItems)
        setloading(false);
        
      } catch (error) {
        seterror(error);
        console.log('estallo')
      }
    }, 3000);
  },[]);

  const saveItem = (newItem) => {
    const strigifiedTodos = JSON.stringify(newItem);
    localStorage.setItem(itemName, strigifiedTodos);
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
