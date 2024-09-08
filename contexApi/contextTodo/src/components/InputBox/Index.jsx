import { useContext, useState } from "react"
import { todoContext } from "../../contextApi/TodoContext"



function InputBox() {
     const {dispatch} = useContext(todoContext);
     const [data, setData] = useState('');
     
     const addTodo = (e)=>{
       console.log(e.target.value)
       setData(e.target.value)
       
     }
     const handleSubmit = ()=>{
          dispatch({type:"ADD_DATA", payload:{id:Date.now(), text:data} })
          setData('')
     }
     
     return (
          <>
               <input type="text" value={data} onChange={addTodo} />
               <button type="submit" onClick={handleSubmit} >add</button>
              
          </>
     )
}

export default InputBox