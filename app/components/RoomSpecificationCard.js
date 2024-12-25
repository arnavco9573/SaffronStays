import React from "react";
import { GoDotFill } from "react-icons/go";
import "./RoomSpecificationCard.css";

const RoomSpecificationCard = ({ photo, description1,description2 }) => {
  return (
    <>
      <div className="specification-box">
        <div className="room-image">
          <img src={photo} alt="Room" className="room-photo" />
        </div>
        <div className="description-container">
          <p className="description-text"><GoDotFill/>{description1}</p>
          <p className="description-text"><GoDotFill/>{description2}</p>
        </div>
      </div>
    </>
  );
};

export default RoomSpecificationCard;
