import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function User() {
   
    const {id} = useParams()
  
  return (
    <>
     <div>
          Our user is : {id}
     </div>
    </>
  )
}

export default User