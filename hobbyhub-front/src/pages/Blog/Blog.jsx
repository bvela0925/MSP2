import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Blogs from '../../components/Blogs/Blogs'
import './Blog.css'

const Blog = () => {
  return (
    <div className="Blog">
      <NavBar/> 
      <Blogs/> 
    </div>
    );
}
        
export default Blog