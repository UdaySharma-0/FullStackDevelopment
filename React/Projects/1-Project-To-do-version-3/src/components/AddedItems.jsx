import React, { useContext, useState } from 'react'
import Button from './Button'
import ItemAdded from './ItemAdded'
import { TodoItemsContext } from '../store/Todo-ItemsStore'

// let AddedItems = ({ ToDoitems, handleDeleteBtn }) => {  
let AddedItems = () => {  
    const contextObj = useContext(TodoItemsContext);
    const todoItemsFromContext = contextObj.toDoItems;
    const handleDeleteBtn = contextObj.deleteItem;
    console.log(todoItemsFromContext);
    return (
        <div>
            {todoItemsFromContext.map(item => (
                <ItemAdded key={item.task} handlebtn={()=>handleDeleteBtn(todoItemsFromContext.indexOf(item))} ToDoName={item.task} ToDodate={item.date} />
            ))}
        </div>
    )
}

export default AddedItems