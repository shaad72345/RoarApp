import React from 'react'
// import logo from '../images/RoarAppLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
import './nav.css';
function NavComp() {

      const {isLogin, Name} = useContext(myContext);
    
  return (
   <div id='navContainer'>
    
    <div style={{display:"flex",justifyContent:"space-evenly"}}>
    <div>
        <Link to = "/createpost" style={{textDecoration:"none"}}><h3 style={{color:"tomato"}}>Create Post</h3></Link>
        </div>
        <div>
        <Link to = "/myposts" style={{textDecoration:"none"}} ><h3 style={{color:"tomato"}}>My Posts</h3></Link>
        </div>
        <div>
        <Link to = "/allposts" style={{textDecoration:"none"}} ><h3 style={{color:"tomato"}}>All Posts</h3></Link>
        </div>
        {/* <div><Link to = "/signup" ><h3>SignUp</h3></Link></div> */}
      {  !isLogin ? <div><Link to = "/login" style={{textDecoration:"none"}} ><h3 style={{color:"tomato"}}>Login</h3></Link></div> : null}
        <div>
        {/* <Link to = "/signout" ><h3>SignOut</h3></Link> */}
        {  isLogin ? <div><Link to = "/signout" style={{textDecoration:"none"}} ><h3 style={{color:"tomato"}}>SignOut</h3></Link></div> : null}
        </div>
       {Name ? <div> <h3 style={{color:"green"}}> {Name}</h3> </div>:null}
       
      </div>
      <hr style={{borderColor:"tomato"}}/>
    
      </div>
  )
}

export default NavComp