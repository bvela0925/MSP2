import React from 'react'
import './AboutUs.css'
import Memb1 from '../../img/follower4.jpg'
import Memb2 from '../../img/follower1.jpg'
import Memb3 from '../../img/follower2.webp'
import Memb4 from '../../img/ThiliniProfile.jpg'

const AboutUs = () => {
  return (

      <div className="Aboutus">
        <div className="name">
          <h4>About us</h4>
          </div>
          <div className="Aboutpara">
            
          <p><span> Welcome to <b>Hobby Hub</b>, where hobbies come to life! 🎨✨ For our <b>Milestone-2 </b>, 
                we decided to make an application to
                create a community that brings people of all backgrounds into the 
                world of creative hobbies with <b>Hobby Hub !</b>
          </span></p>


            <p><span>
            Our journey began with a shared love for creative hobbies, and we envisioned a space 
            that transcends boundaries, bringing people from diverse backgrounds together.
            Meet our dedicated team of enthusiasts, each driven by the belief that creativity
            knows no limits. At Hobbyhub, we’re more than an app; we’re a vibrant community of makers,
             dreamers, and innovators. Whether you’re into painting, coding, crafting, or anything in
             between, there’s a place for you here. Our platform is designed to celebrate individuality
            while fostering connections that transcend borders. What sets Hobbyhub apart? It’s not 
            just about the hobbies; it’s about the people. We’ve curated a space where your unique
            story adds color to the collective canvas. Dive into a world where collaboration sparks 
            creativity, and where every idea finds a welcoming home. 
            
            </span></p>
                      
                      
            <p> <span>Join us on this exciting journey
            of self-expression, learning, and friendship.<b> Hobby Hub</b> is more than a community;
            it’s a celebration of the incredible tapestry of human creativity. Let’s create, connect, 
            and inspire together! </span></p>
            <p> <span>🚀🌈 #HobbyHub #HobbyhubCommunity #CreativityUnleashed 🎨✨</span></p>
                       
           </div>
           <br>
           </br>
           <br>
           </br> 
           <h2>Our Team</h2>
           
<div class="row">
<div class="column">
    <div class="card">
    <img className="MemImg" src={Memb1} alt="Eli Ugolino" />
      <div class="container">
        <h4>Eli Ugolino</h4>
        <p class="title">Project Manager</p>
        <p>eli@Hobbyhub.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img className="MemImg" src={Memb2} alt="Bobbie Velazquez" />
      <div class="container">
        <h4>Bobbie Velazquee</h4>
        <p class="title">UI/UX Designer</p>
        <p>bobbie@Hobbyhub.com</p>
      </div>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img className="MemImg" src={Memb3} alt="Arianna Mireles" />
      <div class="container">
        <h4>Arianna Mireles</h4>
        <p class="title">Back-End Developer</p>
        <p>ari@Hobbyhub.com</p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img className="MemImg" src={Memb4} alt="Thilini Dharma" />
      <div class="container">
        <h4>Thilini Dharmawardhana</h4>
        <p class="title">Front-End Developer</p>
        <p>thilini@Hobbyhub.com</p>
      </div>
    </div>
  </div>

</div>
      </div>
      
    );
}
        
export default AboutUs