

import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
     todos:[{id:1,todo:'hello'}]
}

const todoSlice = createSlice({
         name:'todo',
         initialState,
         reducers:{
          addTodo:(state,action)=>{
           


          },
          removeTodo:(state,action)=>{

          }
         }
})