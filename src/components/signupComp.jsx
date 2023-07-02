import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignupComp() {
        const [flag, setflag]  = useState(false);
        const [Signupflag, setSignupflag]  = useState(false)
        const [signup, setSignup] =  useState({name:"",username:"",password:""});
     const navigate =  useNavigate();
     function gotologin(){
     navigate("/login");
    }
      const handleSignup = ()=>{
             const {name, username, password} =  signup;
             const payload = {name, username, password}

            if(name && username &&password){
 setflag(false);
//  https://giddy-overcoat-jay.cyclic.app

        fetch("https://roar-app-backend.onrender.com/user/signup", {
          method : "POST",
          headers : {'Content-Type':'application/json' },
          body : JSON.stringify(payload)
        }).then((res)=>res.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err))

        setSignupflag(true);
        const myTimeout = setTimeout(gotologin, 3000)
      }
      else{
setflag(true);
      }
      }
  return (
    <div>
      <br /><br /><br />
      <h2>Signup</h2>
      { flag ? <h3 style={{color:"red"}}> Please fill all the entries !</h3> : null}
      { Signupflag ? <> <h3 style={{color:"green"}}> Signup Succesful. Redirecting to login page...</h3> </> : null }
       <input type="text" placeholder='Enter Name' style={{color:"black", padding:"5px"}} onChange={(e)=>{setSignup({...signup,name:e.target.value})}} /><br />
      <input type="text" placeholder='Enter Username' style={{color:"black", padding:"5px", margin:"7px"}} onChange={(e)=>{setSignup({...signup,username:e.target.value})}} /> <br />
      <input type="password" placeholder='Enter Password' style={{color:"black", padding:"5px"}} onChange={(e)=>{setSignup({...signup,password:e.target.value})}}/><br /><br />
      <button style={{color:"black"}} onClick={handleSignup}>Submit</button>
      
    </div>
  )
}

export default SignupComp