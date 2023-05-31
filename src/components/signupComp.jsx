import React from 'react'

function SignupComp() {
  return (
    <div>
      <h2>Signup</h2>

      <input type="text" placeholder='Enter username'/> <br />
      <input type="password" placeholder='Enter Password' /><br />
      <button style={{color:"black"}}>Submit</button>
    </div>
  )
}

export default SignupComp