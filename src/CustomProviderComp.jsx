import React, { useState } from 'react'
import { createContext } from 'react'


export const myContext = createContext();



function CustomProviderComp({children}) {
 const[isWelcome, setWelcome]  = useState(false);
   const [isLogin, setLogin] = useState("");
   const [Name, setName] = useState("");

  //  const login = ()=>{
  //   setLogin(true);
  //  }
   const logout= ()=>{
    setLogin("");
   }
   const handleWelcome = ()=>{
    setWelcome(true);
   }                                    //////////, login
  return (
   <myContext.Provider value = {{isLogin,setLogin, logout,handleWelcome, isWelcome , setName, Name}}>
    {children}
   </myContext.Provider>
  )
}

export default CustomProviderComp