import React from "react";
import "./CustomerReviewCard.css";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";

const CustomerReviewCard = ({ photo, name, date }) => {
  return (
    <div className="review-box">
      <div className="customer-image">
        <Image src={photo} alt={`${name}'s photo`} className="customer-photo" width={260} height={323} />
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
