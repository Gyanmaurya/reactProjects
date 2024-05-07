import React, { useContext } from "react";


const UserContext = React.createContext();

export default UserContext;


// second way to create context provider and create context.

const ThemeContext = React.createContext({
     themeMode : 'light',
     darkMode :()=>{

     },
     lightMode :()=>{
          
     }
})

export  const ThemeContextProvider = ThemeContext.Provider;

export const  useTheme=()=>{
     return useContext(ThemeContext)
 }



