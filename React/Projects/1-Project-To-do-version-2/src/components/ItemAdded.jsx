import React from 'react'
import Button from './Button'

const ItemAdded = ({ToDoName, ToDodate}) => {
    return (
        <div className="flex m-auto max-w-[40%]  gap-8 items-center mb-2 ">
            <div key={ToDoName} className="flex-1 text-left">{ToDoName}</div>
            <div key={ToDodate} className='flex-1 text-left'>{ToDodate}</div>

            <div className=' text-right'><Button color={'red'}/></div>
        </div>
    )
}

export default ItemAdded