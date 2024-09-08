  import { createContext, useReducer } from "react";

export const todoContext = createContext();


  const rootReducer = (state,action)=>{
                switch(action.type){
                case 'ADD_DATA': 
                  return [...state, action.payload];
                  case 'DELETE' :
                      return state.filter((todo)=> todo.id !==action.payload );
                  case 'UPDATE':
                    return  state.map((todo)=> todo.id === action.payload.id ?  {...todo, text:action.payload.text}: todo)

                  case 'SORT' :
                    return [...state].sort((a,b)=> a.text.localeCompare(b.text))  
                default:
                  return state;     
                }
  }






  export const TodoContextProvider = ({children})=>{
      const [todos, dispatch] = useReducer(rootReducer,[])

  return(
          <todoContext.Provider value={{todos, dispatch}}>
            {children}
          </todoContext.Provider>
        )

  }
