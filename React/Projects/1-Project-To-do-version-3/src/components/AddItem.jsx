import React, { useContext, useRef, useState } from "react";
import Button from "./Button";
import { TodoItemsContext } from "../store/Todo-ItemsStore";

// const AddItem = ({ handlebtn }) => {
const AddItem = () => {
  const toDoName = useRef();
  const dueDate = useRef();
  const contextObj = useContext(TodoItemsContext);
  const handlebtn = contextObj.addNewItem;

  const handleAddButtonClick = (e) => {
    e.preventDefault();
    handlebtn(toDoName.current.value, dueDate.current.value);
    toDoName.current.value='';
    dueDate.current.value='';
  };
  return (
    <form action="" method="get" onSubmit={handleAddButtonClick}>
      <div className="flex m-auto max-w-[80%] gap-4 justify-center mb-6">
        <div className="border border-gray-400 rounded px-2">
          <input
            type="text"
            ref={toDoName}
            placeholder="Enter Todo Here"
            className="outline-none p-1"
          />
        </div>
        <div className="border border-gray-400 rounded px-2">
          <input
            type="date"
            ref={dueDate}
            name="date"
            id="date"
            className="outline-none p-1"
          />
        </div>
        <Button color={"green"} /*handlebtn={handleAddButtonClick}*/ />
      </div>
    </form>
  );
};

export default AddItem;
