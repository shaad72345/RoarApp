import React from 'react'

function CreatePost() {
  return (
    <div>
         <h1 > Create Your Post </h1>
       <div style={{background:"white",color:"black", width:"400px", height:"330px", margin:"auto",textAlign:"left", paddingLeft:"10px"}}>
      <br />
      Title:
      <input type="text" placeholder='Enter Title . . .' style={{width:"90%",padding:"7px", color:"black"}}/> <br />
      Description: <br /><textarea name="" id="" cols="49" rows="10" placeholder='Enter description...' style={{color:"black"}}></textarea> <br />
     <br />
     <button style={{padding:"8px 20px",color:"black"}}>Post</button>
     </div>
    </div>
  )
}

export default CreatePost