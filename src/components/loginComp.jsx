import React from 'react'
import { useContext , useState} from 'react';
import { myContext } from '../CustomProviderComp';
import { Link, useNavigate } from 'react-router-dom';
function LoginComp() {
  const [credential, setCredential] = useState({username:"",password:""})
  const[error, setError] = useState("");
   const {isLogin,setLogin, Name, setName} = useContext(myContext);
   const navigate =  useNavigate();
  const [loginflag, setloginflag] = useState(false);
    
  const handlelogin  = ()=>{


      const {username, password} =  credential;
      const payload = {username, password}

     if(username &&password){
 fetch("https://giddy-overcoat-jay.cyclic.app/user/login", {
   method : "POST",
   headers : {'Content-Type':'application/json' },
   body : JSON.stringify(payload)
 }).then((res)=>res.json())
 .then((res)=>{if(res.token){setLogin(res.token); localStorage.setItem("Roar_token",res.token) ; setError(""); setName(res.Name);
 navigate("/allposts");
}
else{
  console.log(res.msg);
  setError(res.msg);
}})
 .catch((err)=>console.log(err))
setloginflag(false)

  }
  else{
       setloginflag(true);
       
  }
}
  return (
    <div>
      <br />
      <br /><br />
      <br />
      <h2>Login </h2>
       {loginflag ? <h3 style={{color:"red"}}>please fill all the fields</h3> : null }
      <input type="text" placeholder='Username' style={{color:"black", padding:"5px"}} onChange={(e)=>{setCredential({...credential,username:e.target.value})}}/>
      <br />
      <input type="password" placeholder='password'style={{color:"black",padding:"5px",margin:"7px"}} onChange={(e)=>{setCredential({...credential,password:e.target.value})}} />
      <br /><br />
      <button style={{color:"black",padding:"5px"}} onClick={handlelogin}>Login</button>
      <br />
      <br />
      <p>don't have account ? <Link to="/signup"><span style={{color:"tomato"}}>Click here </span></Link>  to create an account</p>
      { error ? <h4 style={{color:"red"}}>{error}</h4> : null }
    </div>
  )
}

export default LoginComp