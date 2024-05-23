import { useState, useEffect } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom';

import authService from './appwrite/auth'
import { login,logout } from './store/AuthSlice'
import { useDispatch } from 'react-redux';

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
 useEffect(()=>{

  authService.getUser().then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  }).finally(()=> setLoading(false))

 },[])

  return !loading ? (<>
    <Header/>
    <Outlet />
    <Footer/>
    </>) : (
    <>
    <h1> Data fetching from the server</h1>
    </>
  )
}

export default App
