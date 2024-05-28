
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function AuthLayout({children, authentication=true}) {

     const authStatus = useSelector((state)=> state.auth.status );
     const navigate =useNavigate();

     const [loder, setLoder] = useState(true);
     useEffect(()=>{
          if(authentication && authStatus !== authentication){
               navigate('/login')
          }
         else if(!authentication && authStatus !== authentication){
               navigate('/login')
          }
          else if(authentication && authStatus === true){
               navigate('/')
          }
          setLoder(false)
     },[authStatus, navigate, authentication])



  return  loder ? <h1> loding...</h1> : <>{children}</>
 
}

export default AuthLayout