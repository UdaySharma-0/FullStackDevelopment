import React, { useState } from 'react'
import Display from './components/Display'
import Buttons from './components/Buttons'

const App = () => {
  const [calVal, setCalVal] = useState('');

  const onClickButton = (BtnText)=>{
    if (BtnText === 'C') {
      setCalVal('')
    } else if( BtnText === '='){
      let displayValue = calVal;      
      let result = eval(displayValue);
      setCalVal(result);
    }else{
      let displayValue = calVal + BtnText;
      setCalVal(displayValue);
    }
  }
  return (
    <div className='flex flex-col border p-4 w-3xs h-96'>
      <Display displayValue={calVal}/>
      <Buttons handleCalVal={onClickButton}  />
    </div>
  )
}

export default App