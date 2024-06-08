import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { ButtonComp } from './ButtonComp';
export const UserComponent = () => {

  const [users, setUsers] = useState([]);
  const [Filter, setFilter] = useState("");

  useEffect(()=> {
    axios.get("")
    .then(response =>{
      setUsers(response.data.user);
    })
  },[Filter])

  return (
    <div>
      <div className='w-full font-semibold text-lg border-b-2 mt-14 py-2 px-8'>Users</div>
      <div className="my-2 flex justify-center">
            <input onChange={(e) => {
                setFilter(e.target.value)
            }} type="text" placeholder="Search users..." className="md:w-1/2 w-2/3 md:mx-8 py-2 mt-4 px-2 border rounded border-slate-200 text-black"></input>
        </div>
        <div>
            {users?.map(user => <User user={user} />)}
        </div>
    </div>

    )
}

function User({user}) {
  const navigate = useNavigate();

  return <div className="flex justify-between">
      <div className="flex">
          <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
              <div className="flex flex-col justify-center h-full text-xl">
                  {user.firstName[0]}
              </div>
          </div>
          <div className="flex flex-col justify-center h-ful">
              <div>
                  {user.firstName} {user.lastName}
              </div>
          </div>
      </div>

      <div className="flex flex-col justify-center h-ful">
          <ButtonComp onClick={(e) => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
          }} label={"Send Money"} />
      </div>
  </div>
}