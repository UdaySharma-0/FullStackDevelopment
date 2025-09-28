import React from 'react'
import Button from './Button'
import ItemAdded from './ItemAdded'

const AddedItems = ({ ToDoitems }) => {
    console.log(ToDoitems)
    return (
        <div>
            {ToDoitems.map(item => (
                <ItemAdded ToDoName={item.task} ToDodate={item.date} />
            ))}
        </div>
    )
}

export default AddedItems