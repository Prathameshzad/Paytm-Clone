import React from 'react'

export const Balance = ({value}) => {
  return (
    <div className='flex text-xl'>
        <div className='font-semibold '>Your Balance</div>
        <div className='font-bold ml-4'>Rs {value}</div>
    </div>
  )
}

