import { useState } from 'react'
import InputBox from './components/InputBox/Index'
import ListTodo from './components/ListTodo/Index'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InputBox />
      <ListTodo/>
    </>
  )
}

export default App
