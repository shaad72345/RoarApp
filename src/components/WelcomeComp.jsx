import React from 'react'
import logo from '../images/RoarAppLogo.png'
import { useState } from 'react'
import { useContext } from 'react';
import { myContext } from '../CustomProviderComp';

function WelcomeComp() {
          const {login}  = useContext(myContext);
   const handlelogin = ()=>{
    login();
   }
    
  return (
    <div style={{color:"#00fefb"}}>
      
        <br />
        <h1 style={{color:"#00fefb"}} >Welcome to Roar App</h1>
        <img src={logo} alt="" height="400px" />
        <br />
        <button style={{alignItems:"center", background:"#00fefb", color:"black", padding:"5px"}} onClick={handlelogin}>Click here to continue</button>
 
      </div>
  )
}

export default WelcomeComp