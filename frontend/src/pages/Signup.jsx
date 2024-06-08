import React, { useState } from 'react'
import {Heading } from '../components/Heading.jsx'
import {LightMessage } from '../components/LightMessage.jsx'
import {InputBox } from '../components/InputBox.jsx'
import { ButtonComp } from '../components/ButtonComp.jsx'
import {ButtonWarming} from '../components/ButtonWarming.jsx'
import axios from 'axios'

export const  Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className='h-screen  bg-[#111827] flex justify-center text-[#FFFFFF]'>
        <div className='flex flex-col justify-center'>
          <div className='rounded-lg bg-[#111827] sm:w-96 text-center p-2 h-max px-4'>
            <Heading label={"Sign Up"} />
            <LightMessage label={"Enter your credentials to access your access"}/>
            <InputBox  onChange={e=>{setFirstName(e.target.value)}} placeholder="Your Name" label="First Name" className="pt-4"/>
            <InputBox onChange={e=>{ setlastName(e.target.value)}} placeholder="Your Last Name" label="Last Name" className="pt-4"/>
            <InputBox onChange={e=>{setUserName(e.target.value)}} placeholder="Email" label="Email" className="pt-4"/>
            <InputBox onChange={e=>{setPassword(e.target.value)}} placeholder="password" label="password" className="pt-4"/>
            <div className='mt-8'>
            <ButtonComp onClick={()=>{
              axios.post("http://localhost:3000/api/v1/user/signup", {
                username,
                firstName,
                lastName,
                password
              })
            }} label={"Sign up"}/>
            </div>
            <ButtonWarming label={'Already have an account ?'} buttonText={"Sign up"} to={"/signup"}/>
          </div>
        </div>
    </div>
  )
}

