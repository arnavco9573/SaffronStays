import React from "react";
import "./CustomerReviewCard.css";
import { GoDotFill } from "react-icons/go";

const CustomerReviewCard = ({ photo, name, date }) => {
  return (
    <div className="review-box">
      <div className="customer-image">
        <img src={photo} alt={`${name}'s photo`} className="customer-photo" />
      </div>
      <div className="customer-info-box">
        <p>{name}</p>
        <GoDotFill/>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default CustomerReviewCard;
