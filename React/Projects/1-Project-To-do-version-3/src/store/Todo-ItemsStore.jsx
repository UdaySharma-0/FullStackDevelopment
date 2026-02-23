import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => [],
  deleteItem: () => [],
});

//Reducer Function that is independent of any component
const TodoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;

  if (action.type === 'NEW_ITEM') {
    newTodoItems = [
      ...currTodoItems,
      { task: action.payload.enteredItem, date: action.payload.enteredDate },
    ];
  } else if(action.type === 'DELETE_ITEM'){
    console.log('hello', action.payload.indexTobeDeleted);
    newTodoItems = currTodoItems.filter(elements =>{
      return !(elements === currTodoItems[action.payload.indexTobeDeleted]);
    });
  }
  console.log(newTodoItems);
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [toDoItems, dispatchTodoItems] = useReducer(TodoItemsReducer, []);
  const addNewItem = (enteredItem, enteredDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        enteredItem,
        enteredDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (index) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        indexTobeDeleted: index,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{ toDoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
