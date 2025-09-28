import React from 'react'

const Button = ({ color }) => {
  console.log(color)
  return (
    <button 
      className={`font-semibold text-white rounded-sm w-20 py-1.5 ${
        color === 'red' 
          ? 'bg-red-500 hover:bg-red-700' 
          : 'bg-green-500 hover:bg-green-700'
      }`}
    >
      {color === 'red' ?  'Delete' : 'Add'} 
    </button>
  )
}

export default Button