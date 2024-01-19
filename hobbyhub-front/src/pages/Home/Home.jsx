import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import ProfileSide from '../../components/ProfileSide/ProfileSide'
import NavBar from '../../components/NavBar/NavBar'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
       <NavBar/>
       <ProfileSide/>
       <PostSide/>
       <RightSide/>
    </div>
  )
}

export default Home