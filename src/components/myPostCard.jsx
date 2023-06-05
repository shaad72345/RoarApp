import React from 'react'
import { Link } from 'react-router-dom'

function MyPostCard({props}) {

    
  return (
    <div>
        <div><h2>{props.Title}</h2></div>
        { props.Post_Image ?<div> <img src={props.Post_Image} alt="" width="200px"/></div> :null }
        <div><p>{props.description}</p></div>
       
        <div><Link to ={`/delete/${props._id}`}><button style={{color:"black"}} >Delete</button> </Link></div>
        <br />
        <hr style={{borderColor:"tomato"}}/>
    </div>
  )
}

export default MyPostCard