import React from 'react'
import Button from './Button'

const AddedItems = ({TodoName, TodoDate}) => {
// const AddedItems = ({ item }) => {
    return (

        <div className="flex m-auto max-w-[40%]  gap-8 items-center mb-2 ">
            
            <div className="flex-1 text-left">{TodoName}</div>
            <div className='flex-1 text-left'>{TodoDate}</div> 

            <div className=' text-right'><Button /></div>
        </div>
    )
}

export default AddedItems