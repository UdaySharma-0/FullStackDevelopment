import React from 'react'

const AddItem = () => {
  return (
    <div className="flex m-auto max-w-[80%] gap-4 justify-center mb-6">
        <div className="border border-gray-400 rounded px-2">
          <input
            type="text"
            placeholder="Enter Todo Here"
            className="outline-none p-1"
          />
        </div>
        <div className="border border-gray-400 rounded px-2">
          <input type="date" name="date" id="date" className="outline-none p-1" />
        </div>
        <button className="bg-green-500 font-semibold text-white rounded-sm px-6 hover:bg-green-700">
          Add
        </button>
      </div>
  )
}

export default AddItem