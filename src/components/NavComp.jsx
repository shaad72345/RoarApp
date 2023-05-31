import React from 'react'
// import logo from '../images/RoarAppLogo.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
function NavComp() {

      const {isLogin} = useContext(myContext);
      console.log(isLogin);
  return (
    <>
    
    <div style={{display:"flex",justifyContent:"space-evenly", color:"white"}}>
        
        <div>
        <Link to = "/myposts" ><h3>My Posts</h3></Link>
        </div>
        <div>
        <Link to = "/allposts" ><h3>All Posts</h3></Link>
        </div>
        {/* <div><Link to = "/signup" ><h3>SignUp</h3></Link></div> */}
      {  !isLogin ? <div><Link to = "/login" ><h3>Login</h3></Link></div> : null}
        <div>
        {/* <Link to = "/signout" ><h3>SignOut</h3></Link> */}
        {  isLogin ? <div><Link to = "/signout" ><h3>SignOut</h3></Link></div> : null}
        </div>
      </div>
    
    
    </>
  )
}

export default NavComp