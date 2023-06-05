import React, { useEffect } from 'react'

import PostCard from './PostCard'
import { useContext } from 'react'
import { myContext } from '../CustomProviderComp'
import { useState } from 'react'

function AllpostsComp() {
  const [allpost, setAllpost] = useState([]);
  const {isLogin} = useContext(myContext);
  
  console.log(isLogin);
 const  getposts = ()=>{

  fetch("http://localhost:8080/posts", {
    method : "GET",
    headers : {
      'Authorization' : `Bearer ${isLogin}`
    }
  }).then((res)=>res.json())
  .then((res)=>{console.log(res); setAllpost(res)})
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