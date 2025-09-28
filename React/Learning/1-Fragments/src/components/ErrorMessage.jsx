import React from 'react'
import styles from './error.module.css'

const ErrorMessage = ({items}) => {

  return (
    <div className='m-3'>    
        {items.length === 0 && <h1 className={styles['error-span']}>I am still hungry</h1>}
    </div>
  )
}

export default ErrorMessage