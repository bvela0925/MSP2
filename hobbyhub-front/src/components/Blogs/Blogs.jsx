import React from 'react'
import './Blogs.css'
//import {Bloggs} from '../../Data/BlogData'
import blog1 from '../../img/knitting.jpg'
import blog2 from '../../img/miniature.jpg'
import blog3 from '../../img/woodcarving.webp'
import blog4 from '../../img/garden.jpg'
import blog5 from '../../img/baking.jpg'
import blog6 from '../../img/artNcraft.jpg'

const Blog = () => {
    return (
      <div className="Blogs">
      <div className="name">
        <h4>Blogs</h4>
        </div>
        
        <div class="more-articles">
      <section className="card">
        <h4>Knitting</h4>
        <img className="BlogImg" src={blog1} alt="knitting picture"/>
        <p>Knitting is a process of using long needles to interlink or knot a series of loops made by one continuous thread. Each loop or knot connects to another one, and when enough loops have been made, the result is a flat piece of material called a textile.</p>
      </section>
      <section className="card">
        <h4>Miniature Addiction</h4>
        <img className="BlogImg" src={blog2} alt="miniature picture"/>
        <p>CRAFT IN AMERICA “Miniatures” examines the world of tiny objects and the artists that make them. From folk art to marionettes to tiny furniture, the artists of "Miniatures" reveal what motivates them to work at a scale that demands a masterful attention to detail.</p>
      </section>
      <section className="card">
        <h4>Wood Carving</h4>
        <img className="BlogImg" src={blog3} alt="wood carving  picture"/>
        <p>Are you looking for a hobby that allows you to create beautiful keepsakes or practical items without spending hundreds of dollars just to get started? Wood carving checks all of those boxes. When woodcarvers talk about their craft, they mention the tools they use, the kinds of wood they carve, and the types of carving they do.  </p>
      </section>
    </div>

    <div class="more-articles">
    <section className="card">
        <h4>Garden Therapy by Stephanie</h4>
        <img className="BlogImg" src={blog4} alt="gardening picture"/>
        <p>Stephanie is a passionate gardener and an award-winning author who has years of experience in gardening. You will find articles, projects, and recipes where she shares her personal experience and methods with attractive photos on her gardening blog. She believes that digging the earth, spending time in the garden, and connecting with mother nature can bring immediate positive results. If you are new to gardening, her gardening blogs for beginners section is particularly insightful.</p>
      </section>
      <section className="card">
        <h4>Sallys Baking Addiction</h4>
        <img className="BlogImg" src={blog5} alt="baking picture"/>
        <p>Sally shares approachable made-from-scratch desserts, comfort foods and easy dinner recipes that anyone can prepare. Brown Eyed Baker is a food blog dedicated to baking, desserts and easy comfort food. Each recipe features original photography!</p>
      </section>
      <section className="card">
        <h4>Arts & Crafts</h4>
        <img className="BlogImg" src={blog6} alt="artNcraft"/>
        <p>Arts and crafts describes a wide variety of activities involving making things with one's own hands. Arts and crafts is usually a hobby. Some crafts (art skills) have been practised since preshistoric times, others are more recent inventions..</p>
      </section>
    </div>
    </div>
      );
    }
    
  export default Blog
        
