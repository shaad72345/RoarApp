import React, { useEffect } from 'react'

import PostCard from './PostCard'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
import { useState } from 'react'

function AllpostsComp() {
  const [allpost, setAllpost] = useState([]);
  const {isLogin} = useContext(myContext);
  
 // console.log(isLogin);
 const  getposts = ()=>{

  fetch("https://todoapp-5u2n.onrender.com/posts", {
    method : "GET",
    headers : {
      'Authorization' : `Bearer ${isLogin}`
    }
  }).then((res)=>res.json())
  .then((res)=>{setAllpost(res)})
  .catch((err)=>{console.log(err)})
 }

useEffect(()=>{getposts()},[])
  return (
    <div style={{width:"60%", margin:"auto"}}>
    {  allpost.map(function(elem){
         return <PostCard props = {elem} />
      })}
    </div>
  )
}

export default AllpostsComp



// return (
//   <div style={{width:"60%", margin:"auto"}}>
//   {  data1.map(function(elem){
//        return <PostCard props = {elem} />
//     })}
//   </div>
// )