import React, { useState } from 'react'
import MyPostCard from './myPostCard'

import { useContext } from 'react';
import { myContext } from '../CustomProviderComp';
import { useEffect } from 'react';

function MyPostsComp() {
  const {isLogin} = useContext(myContext);
  const [mypost, setMypost] = useState([]);
 // console.log(isLogin);
  
 const  getposts = ()=>{

  fetch("https://roar-app-backend.onrender.com/posts/my", {
    method : "GET",
    headers : {
      'Authorization' : `Bearer ${isLogin}`
    }

  }).then((res)=>res.json())
  .then((res)=>{setMypost(res);})
  .catch((err)=>{console.log(err)})

 }

useEffect(()=>{getposts()},[])

  return (
<div style={{width:"60%", margin:"auto"}}>
  
    {  mypost.map(function(elem){
         return <MyPostCard props = {elem} />
      })}
    </div>
  )
}

export default MyPostsComp