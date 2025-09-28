import React from 'react'
import HeadNameTodo from './components/HeadNameTodo'
import AddItem from './components/AddItem'
import AddedItems from './components/AddedItems'
import "./App.css";

const App = () => {
  const item = [
    {
      task: 'Buy Milk',
      date: '3/10/25'
    },
    {
      task: 'Go To College',
      date: '20/09/25'
    },
    {
      task: 'Learning React',
      date: 'Right Now'
    }
  ]
  return (
    <div className="font-mono text-center p-4">
      <HeadNameTodo />

      {/* Input Section */}
      <AddItem />

      {/* Todo Item 1 */}
      {/* <AddedItems TodoName="Buy Milk" TodoDate='3/10/25' /> */}
      <AddedItems ToDoitems={item} />

      {/* Todo Item 2 */}
      {/* <AddedItems TodoName="Go To College" TodoDate='20/09/25' /> */}
    </div>
  )
}

export default App
