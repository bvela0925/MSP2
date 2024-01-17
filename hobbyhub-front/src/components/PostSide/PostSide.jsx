import React from 'react'
import Posts from '../Posts/Posts'
import PostShare from '../PostShare/PostShare'
import NavBar from '../NavBar/NavBar'
import './PostSide.css'
const PostSide = () => {
  return (
   <div className="PostSide">
       <PostShare/>
       <Posts/>
       <NavBar/>
       <handleShowNavbar/>
   </div>
  )
}

export default PostSide