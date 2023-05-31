import React, { useState } from 'react'
import { createContext } from 'react'


export const myContext = createContext();



function CustomProviderComp({children}) {
   const [isLogin, setLogin] = useState(false);
   const login = ()=>{
    setLogin(true);
   }
   const logout= ()=>{
    setLogin(false);
   }
  return (
   <myContext.Provider value = {{isLogin, login, logout}}>
    {children}
   </myContext.Provider>
  )
}

export default CustomProviderComp