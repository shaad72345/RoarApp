import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { myContext } from '../CustomProviderComp';
import { useContext } from 'react';
function DeleteComp() {
    const [isdeleted , setIsDeleted] = useState(false);
    const {isLogin} = useContext(myContext);
    const {id}= useParams();
    function gotomyposts(){
        navigate("/myposts");
       }
       const navigate = useNavigate();
    const backtomyposts =()=>{
        navigate("/myposts")
       }

       const handleDelete = async()=>{
         await fetch(`https://roar-app-backend.onrender.com/posts/delete/${id}`, {
            method : "DELETE",
            headers : {
                'Authorization' : `Bearer ${isLogin}`
          }
        }
            )

            setIsDeleted(true);

           
         const myTimeout = setTimeout(gotomyposts, 1000)

       }
  return (
    <div>
     { isdeleted ?  <div><h2 style={{color:"teal"}}>Deleted Succesfully...</h2></div> :
        <div style={{color:"black"}}>
        <h2>Are you sure to delete this post ?</h2><br />

        <button style={{color:"black"}} onClick={handleDelete} >Yes</button>
         &nbsp;&nbsp;
         <button style={{color:"black"}} onClick={backtomyposts}>No</button>
    </div>}
    </div>
  )
}

export default DeleteComp