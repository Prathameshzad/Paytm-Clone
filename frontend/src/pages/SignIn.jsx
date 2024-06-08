import React from 'react'
import {Heading } from '../components/Heading.jsx'
import {LightMessage } from '../components/LightMessage.jsx'
import {InputBox } from '../components/InputBox.jsx'
import { ButtonComp } from '../components/ButtonComp.jsx'
import {ButtonWarming} from '../components/ButtonWarming.jsx'

export const SignIn = () => {
  return (
    <div className='h-screen  bg-[#111827] flex justify-center text-[#FFFFFF]'>
        <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-[#111827] sm:w-96 text-center p-2 h-max px-4'>
            <Heading label={"Sign in"} />
            <LightMessage label={"Enter your Information to create an account"}/>
            <InputBox placeholder="pratham@gmail.com" label="Email" className="pt-4"/>
            <InputBox placeholder="1234567" label="password" className="pt-4"/>
            <div className='mt-8'>
            <ButtonComp label={"Sign in"}/>
            </div>
            <ButtonWarming label={"Don't have an account ?"} buttonText={"Sign in"} to={"/signin"}/>
          </div>
        </div>
    </div>
  )
}

//flex min-h-full flex-col bg-[#111827] justify-center px-6 py-12 lg:px-8