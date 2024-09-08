
  import { useContext, useState } from 'react'
  import './index.css'
  import { todoContext } from '../../contextApi/TodoContext'
  function ListTodo() {
    const {todos,dispatch} = useContext(todoContext);
    const [editId, setEdId] = useState(null);
    const [text, setText] = useState('')
    const deleteHandle = (id)=>{
      dispatch({type:"DELETE", payload:id })
    }

    const editTodo = (todo)=>{
      setEdId(todo.id);
      setText(todo.text)
      console.log(`Editing todo with id: 1`); 
      
    }
    
    const saveEdit = ()=>{
      dispatch({type:"UPDATE", payload:{id:editId,text}})
      setEdId(null)
      setText('')
      console.log(`Editing todo with id: 2`); 
    }

    const sortTodo = ()=>{
      dispatch({type:'SORT'})
    }

    return (
      <div>
        {todos.map((todo) => (
          
          <div key={todo.id} className="ListContainer">
          {editId ===todo.id ? (<>
                  <input type="text" value={text} onChange={(e)=> setText(e.target.value)} />
                  <button onClick={saveEdit}>Save</button>
          </>):(<>
            <div className='textAdded'>{todo.text}</div>
            <div className='deleteTodo' onClick={()=> deleteHandle(todo.id)} ><span>&#x2715;</span></div>
            <div className='editTodo' onClick={editTodo}>&#x270E;</div>
            
          </>)}
            
          </div>
        ))}

        <div onClick={()=> sortTodo(todos)}>Sort</div>
      </div>
    )
  }

  export default ListTodo

  