import React from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  return (
    <div className='flex flex-col border p-4 w-3xs h-96'>
      <Display />
      <Buttons />
    </div>
  )
}

export default App