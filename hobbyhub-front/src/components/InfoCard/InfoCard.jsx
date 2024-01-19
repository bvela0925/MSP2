import React, { useState } from "react";
import "./InfoCard.css";
import { UilPen } from "@iconscout/react-unicons";
//import ProfileModal from "../ProfileModal.jsx/ProfileModal";

const InfoCard = () => {
  //const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="InfoCard">
      <div className="infoHead">
        <h4>Your Info</h4>
        <div>
          <UilPen width="2rem" height="1.2rem"
            // onClick={() => setModalOpened(true)}
          />
          {/* <ProfileModal
            modalOpened={modalOpened}
            setModalOpened={setModalOpened}
          /> */}
        </div>
      </div>

      <div className="info">
        <span>
          <b>Hobby </b>
        </span>
        <span>Miniature Artist</span>
      </div>

      <div className="info">
        <span>
          <b>Lives in </b>
        </span>
        <span>Illinois</span>
      </div>

      <div className="info">
        <span>
          <b>Joined </b>
        </span>
        <span>2023</span>
      </div>

      <button className="button logout-button">Log out</button>
    </div>
  );
};

export default InfoCard;
