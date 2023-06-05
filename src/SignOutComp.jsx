import React from 'react'
import { useContext } from 'react'
import { myContext } from './CustomProviderComp'
import { useNavigate } from 'react-router-dom';

function SignOutComp() {
      const {logout, setName}  = useContext(myContext);
      const navigate = useNavigate();

    const handleSignout = ()=>{
     logout();
     localStorage.removeItem("Name");
     setName("");
     navigate("/login")
    }
   const backtoallposts =()=>{
    navigate("/allposts")
   }
  return (
    <div style={{color:"black"}}>
        <h2>Are you sure to signout ?</h2><br />

        <button style={{color:"black"}} onClick={handleSignout} >Yes</button>
         &nbsp;&nbsp;
         <button style={{color:"black"}} onClick={backtoallposts}>No</button>
    </div>
  )
}

export default SignOutComp