import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
     const {user} = useContext(UserContext);
     console.log(user)
  
     if(!user) return <div>Please login</div>

     return <div>Welcome to :{user.name}</div>
  
}

export default Profile