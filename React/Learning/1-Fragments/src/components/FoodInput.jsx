import React from 'react'
import style from './FoodInput.module.css'

//React uses Synthetic Base Event not direct browser event so that it can work well even in android app, ios app etc

const FoodInput = ({ handleKeyDown }) => {
  
  return (
    <input 
    className={style.input}
    type="text"
    placeholder='Enter food item here'
    onKeyDown={handleKeyDown}/>
  )
}

export default FoodInput