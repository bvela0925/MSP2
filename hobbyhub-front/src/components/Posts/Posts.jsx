import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/Postsdata'
import Post from '../Post/Post'

const Posts = () => {
  return (
    <div className="Posts">
        {PostsData.map((post, id)=>{
            return <Post data={post} id={id}/> //everything in post will pass here
        })}
    </div>
  )
}

export default Posts