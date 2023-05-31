import React, { useState } from 'react'
import { createContext } from 'react'


export const myContext = createContext();



function CustomProviderComp({children}) {
 const[isWelcome, setWelcome]    = useState(false);
   const [isLogin, setLogin] = useState(false);
   const login = ()=>{
    setLogin(true);
   }
   const logout= ()=>{
    setLogin(false);
   }
   const handleWelcome = ()=>{
    setWelcome(true);
   }
  return (
   <myContext.Provider value = {{isLogin, login, logout,handleWelcome, isWelcome}}>
    {children}
   </myContext.Provider>
  )
}

export default CustomProviderComp