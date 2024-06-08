import React from 'react'
import { UserLogo } from './UserLogo.jsx'

export const AppBar = () => {
  return (
    <div className='h-14 w-full border-b-2 border-[#9CA3AF] flex flex-row justify-between items-center px-8'>
        <div className='font-semibold'>
            Paytm app
        </div>
            <div className='font-semibold flex'>
                <div className='items-center mt-1 pr-3'>Hello</div>
                <div><UserLogo /></div>
            </div>


    </div>
  )
}

