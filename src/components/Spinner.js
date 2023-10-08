import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='mx-auto mt-[30vh]'>
      <div className='loader'></div>
      <div className='text-white'>loading...</div>
    </div>
  )
}

export default Spinner
