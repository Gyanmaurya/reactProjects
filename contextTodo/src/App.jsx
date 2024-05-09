import { useState,useEffect } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';




function App() {
  const [todos,setTodo] = useState([]);

  const addTodo = (todo)=>{
    setTodo((pre)=> [{id:Date.now(),...todo},...pre])
  }
  const deleteTodo = (id)=>{
setTodo((pre)=> pre.filter((todo)=> todo.id !== id) )
    
  }
  const updateTodo = (id,todo)=>{
   setTodo((pre)=> pre.map((preTodo)=> (preTodo.id === id ? todo: preTodo) ))
  }
  const toggleComplete = (id)=>{
    setTodo((prev)=> prev.map((todo)=>todo.id === id ? {...todo , completed:!todo.completed  }:todo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodo(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo, toggleComplete}}  >
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    
                        {/*Loop and Add TodoItem here */}

                        {todos.map((todo)=>(<div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>) )}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App