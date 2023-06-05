import React from 'react'

function PostCard({props}) {
  return (
    <div>
      
        <div><h2>{props.Title}</h2></div>
        
          
       { props.Post_Image ?<div> <img src={props.Post_Image} alt="" width="100px"/></div> :null }
        <div><p>{props.description}</p></div>
        <br />
        <hr style={{borderColor:"tomato"}}/>
    </div>
  )
}

export default PostCard