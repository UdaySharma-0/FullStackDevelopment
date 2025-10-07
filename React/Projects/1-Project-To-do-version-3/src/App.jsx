import React, { useReducer, useState } from "react";
import HeadNameTodo from "./components/HeadNameTodo";
import AddItem from "./components/AddItem";
import AddedItems from "./components/AddedItems";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/Todo-ItemsStore";
import "./App.css";

const App = () => {
  const [toDoItems, setToDoItems] = useState([]);

  const deleteItem = (index) => {
    const newToDoItems = toDoItems.filter((elements) => {
      return !(elements === toDoItems[index]);
    });
    console.log(index, newToDoItems);
    setToDoItems(newToDoItems);
  };

  const addNewItem = (enteredItem, enteredDate) => {
    // console.log('Item Added', enteredItem, ' ', enteredDate);
    // const newToDoItems = [...toDoItems, {task: enteredItem, date: enteredDate}];
    // setToDoItems(newToDoItems);

    setToDoItems((currentStateItems) => [
      ...currentStateItems,
      { task: enteredItem, date: enteredDate },
    ]);
  };

  return (
    <TodoItemsContext.Provider value={{ toDoItems, addNewItem, deleteItem }}>
      <div className="font-mono text-center p-4">
        <HeadNameTodo />
        <AddItem />
        <WelcomeMsg/>
        <AddedItems />
      </div>
    </TodoItemsContext.Provider>
  );
};

export default App;
