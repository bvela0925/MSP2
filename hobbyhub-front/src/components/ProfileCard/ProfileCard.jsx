import React from "react";
import Cover from "../../img/profileCover.webp";
import Profile from "../../img/ThiliniProfile.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
  <div className="ProfileCard">
    <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
    </div>
    <div className="ProfileName">
        <span>Thilini Dharma</span>
        <span>Miniature Artist</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>2,890</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>4</span>
            <span>Followers</span>
          </div>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
        </div>
        <hr />
      </div>
      <span>My Profile</span>
    </div>
  
  )
}
export default ProfileCard
