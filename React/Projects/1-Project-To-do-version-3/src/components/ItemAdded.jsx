import React from 'react'
import Button from './Button'

const ItemAdded = ({ToDoName, ToDodate, handlebtn}) => {

    return (
        <div className="flex m-auto w-[90%] md:w-[40%] gap-8 items-center mb-2 ">
            <div key={ToDoName} className="flex-1 text-left">{ToDoName}</div>
            <div key={ToDodate} className='flex-1 text-left'>{ToDodate}</div>

            <div className=' text-right'><Button handlebtn={handlebtn} color={'red'}/></div>
        </div>
    )
}

export default ItemAdded