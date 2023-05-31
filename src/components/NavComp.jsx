import React from 'react'
// import logo from '../images/RoarAppLogo.png'
import { Link } from 'react-router-dom'
function NavComp() {
  return (
    <>
    
    <div style={{display:"flex",justifyContent:"space-evenly", color:"white"}}>
        
        <div>
        <Link to = "/myposts" ><h3>My Posts</h3></Link>
        </div>
        <div>
        <Link to = "/allposts" ><h3>All Posts</h3></Link>
        </div>
        <div><Link to = "/signup" ><h3>SignUp</h3></Link></div>
        <div><Link to = "/login" ><h3>Login</h3></Link></div>
      </div>
    
    
    </>
  )
}

export default NavComp