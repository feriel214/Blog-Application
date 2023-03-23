import React from 'react'
import "./SinglePost.css"
import blog1 from "../../assets/blog1.webp"
function SinglePost() {
  return (
    <div className='singlePost'>
        <div className='singlePostWrapper'>
            <img className='singlePostImg' src={blog1} alt=""/>
            <h1 className="singlePostTitle">
                Post Title
               <div className='singlePostEdit'>
                    <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i class="singlePostIcon fa-sharp fa-solid fa-trash"></i>
               </div>
            </h1>
            <div className='singlePostInfo'>
               <span className='singlePostAuthor'> Author : <b>Feriel Zarrouki </b></span>
               <span className='singlePostDate'> Date : 1 hour ago</span>
            </div> 
            <p className='singlePostDesc'>
            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?
            </p>
            
        </div> 
    </div>
  )
}

export default SinglePost