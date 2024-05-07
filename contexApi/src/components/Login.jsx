import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

function Login() {
     const [pass,setPass] = useState('')
     const [name,setName] = useState('')
     const {setUser} = useContext(UserContext)
     console.log(setUser)

     const submitHandler = ()=>{
         
         setUser({name,pass})
     }
  return (
    <>
     <input type="text" placeholder='userName' value={name} onChange={(e)=> setName(e.target.value)} />
     <input type="text" placeholder='Password' value={pass} onChange={(e)=> setPass(e.target.value)} />
     <button onClick={submitHandler}>Submit</button>
    </>
  )
}

export default Login