import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increase } from './Action/action'

function App() {
  const [count, setCount] = useState(0)
  const state = useSelector((state)=> state.reducer)
  const dispatch = useDispatch()

  return (
    <>
     <div>
     <div>{state}</div>
      <button onClick={()=>dispatch(increase()) }></button>
     </div>
    </>
  )
}

export default App
