import React from "react";
import "./MobilePriceCard.css"

const MobilePriceCard = () => {
  return (
    <div className="mobile-price-card">
      <div className="price-details">
        <p className="old-price">₹1,49,086</p>
        <p className="new-price">₹1,00,086<span>/night</span></p>
      </div>
      <button className="availability-button-mobile">Check Availability</button>
    </div>
  );
};

export default MobilePriceCard;
