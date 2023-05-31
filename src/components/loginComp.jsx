import React from 'react'
import { useContext , useState} from 'react';
import { myContext } from '../CustomProviderComp';
import { Link, useNavigate } from 'react-router-dom';
function LoginComp() {
  const [credential, setCredential] = useState({username:"",password:""})
  const {isLogin,login} = useContext(myContext);
  const navigate =  useNavigate();
  const handlelogin  = ()=>{
  if(credential.username=="Shaad" && credential.password=="12345"){
login();
alert("Login Succesful")
navigate("/allposts")
  }
  else{
    alert("Wrong Email or password");
  }
  }
  return (
    <div>
      <br />
      <br /><br />
      <br />
      <h2>Login </h2>
      <input type="text" placeholder='Username' style={{color:"black", padding:"5px"}} onChange={(e)=>{setCredential({...credential,username:e.target.value})}}/>
      <br />
      <input type="password" placeholder='password'style={{color:"black",padding:"5px"}} onChange={(e)=>{setCredential({...credential,password:e.target.value})}} />
      <br /><br />
      <button style={{color:"black",padding:"5px"}} onClick={handlelogin}>Login</button>
      <br />
      <br />
      <p>don't have account ? <Link to="/signup"><span style={{color:"tomato"}}>Click here </span></Link>  to create an account</p>
      
    </div>
  )
}

export default LoginComp