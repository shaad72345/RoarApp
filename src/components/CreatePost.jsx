import React, { useRef, useState } from 'react'
import { useContext } from 'react';
import { myContext } from '../CustomProviderComp';
function CreatePost() {
  const titlebox = useRef();
  const {isLogin} = useContext(myContext);
  const [post, setPost] = useState({Title:"", description:""})
  const [uploadMsg, setUploadMsg] = useState("");
  const [Post_Image, setImage] = useState("")
 const handleUpload = ()=>{
  const {Title, description} = post;
  console.log(Post_Image);
const payload = {Title,Post_Image, description}
  fetch("http://localhost:8080/posts/create", {
    method:"POST",
    headers : {
      'Content-Type':'application/json',
      'Authorization' : `Bearer ${isLogin}`
   },
    body : JSON.stringify(payload)
  }).then((res)=>res.json())
  .then((res)=>{console.log(res); setUploadMsg(res.msg); titlebox ="" })
  .catch((err)=>console.log(err))

 }
 const convertToBase64 = (e)=>{
console.log(e);
var reader = new FileReader();
reader.readAsDataURL(e.target.files[0]);
reader.onload =() =>{
  console.log(reader.result)
  setImage(reader.result);
  console.log(Post_Image);
  
}
 }

  return (
    <div>
         <h2 > Create Your Post </h2>
         {uploadMsg ?  <div><h2 style={{color:"darkgreen"}} >{uploadMsg}</h2></div> : 
       <div style={{background:"white",color:"black", width:"400px", height:"420px", margin:"auto",textAlign:"left", paddingLeft:"10px"}}>
      <br />
      Title:
      <input type="text" placeholder='Enter Title . . .' ref = {titlebox} style={{width:"90%",padding:"7px", color:"black"}} onChange={(e)=>{setPost({...post,Title:e.target.value})}}/> <br />
      Description: <br /><textarea name="" id="" cols="49" rows="5" placeholder='Enter description...' style={{color:"black"}} onChange={(e)=>{setPost({...post,description:e.target.value})}} ></textarea> <br />
     
     <div style={{display:"flex", padding:"20px"}}> 
      <div>
     <p style={{color:"black"}}>Upload Image : </p> &nbsp;
     <input type="file"
     accept='image/*'
     onChange={convertToBase64} />
     <br /> <br />
     <img src={Post_Image} alt=""  width="100px" height="100px"/>
     </div>
     <div>
     <button style={{padding:"8px 20px",color:"black"}} onClick={handleUpload}>Upload </button>
     </div>
     </div>
     </div>
   }
    </div>
  )
}

export default CreatePost