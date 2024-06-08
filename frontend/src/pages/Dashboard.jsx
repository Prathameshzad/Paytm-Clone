import React from 'react'
import { AppBar } from '../components/AppBar'
import { Balance } from '../components/Balance'
import { UserComponent } from '../components/UserComponent'

export const Dashboard = ()=> {
  return (
    <div className='h-screen  bg-[#111827] text-[#FFFFFF]'>
      <AppBar/>
      <div className='m-8'>
      <Balance value={"10,000"}/> 
      </div>
      <UserComponent/>
    </div>
  )
}
