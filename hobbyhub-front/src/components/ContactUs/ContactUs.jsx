import React from 'react'
import './ContactUs.css'
import Memb1 from '../../img/EliProfile.webp'
import Memb2 from '../../img/follower8.jpg'
import Memb3 from '../../img/follower7.webp'
import Memb4 from '../../img/ThiliniProfile.jpg'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactUs = () => {
  return (

      <div className="Contactus">
        <div className="name">
          <h4>Contact us</h4>
          </div>
          <div >
          <p className="para"><span>
          Together, we embarked on a journey to build Hobby Hub, a community 
          that transcends borders, celebrating creativity in all its forms.
           Each of us brings a unique perspective and skill set to the table,
            united by the common goal of fostering a welcoming space for hobbyists worldwide. 
            Join us on this exciting adventure as we continue to grow, learn, and create together.
             Hobbyhub is not just an app; it’s a reflection of our collective passion for creativity 
             and community. Thank you for being part of our story! 
          </span></p> 
          <p className="para"><span>
         <h4> Meet the Minds Behind Hobby Hub,</h4>  
          </span></p>                   
           </div>
           <br> 
           </br>
<div class="row">
<div class="column">
    <section>
    <div class="card">
    <img className="MemImg" src={Memb1} alt="Eli Ugolino" />
      <div class="container"> 
        <b>Eli Ugolino</b>
        <p>🏠 7012,south Shore Dr,Chicago,IL 60649</p>
        <p>📞 (453) 546-7899</p>
        <p>📧 eli@Hobbyhub.com</p>
      </div> 
    </div>
    </section>
  </div>

  <div class="column">
  <section>
    <div class="card">
    <img className="MemImg" src={Memb2} alt="Bobbie Velazquez" />
      <div class="container">
        <b>Bobbie Velazquez</b>
        <p>🏠 4952 S,Washington St,Chicago,IL 60602</p>
        <p>📞 (980) 771-6789</p>
        <p>📧 bobbie@Hobbyhub.com</p>
      </div>
    </div>
    </section>
  </div>

  <div class="column">
  <section>
    <div class="card">
    <img className="MemImg" src={Memb3} alt="Arianna Mireles" />
      <div class="container">
      <b>Arianna Mireles</b>
      <p>🏠 636 E,Albany Ave,Chicago,IL 60618</p>
      <p>📞 (744) 890-2256</p>
      <p>📧 ari@Hobbyhub.com</p>
      </div>
    </div>
    </section>
  </div>

  <div class="column">
  <section>
    <div class="card">
    <img className="MemImg" src={Memb4} alt="Thilini Dharma" />
      <div class="container">
        <b>Thilini Dharmawardhana</b>
        <p>🏠432 D,Handel Ct,Wheaton,IL 60189</p>
        <p>📞 (630) 844-6462</p>
        <p>📧 thilini@Hobbyhub.com</p>
      </div>
    </div>
    </section>
  </div>

  </div>
</div>
      
    );
}
        
export default ContactUs