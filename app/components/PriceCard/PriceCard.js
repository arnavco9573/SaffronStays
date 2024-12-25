"use client";
import React, { useState } from "react";
import "./PriceCard.css";
import { AiOutlineCalendar, AiOutlineUser } from "react-icons/ai";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const PriceCard = () => {
  const [selectedRange, setSelectedRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guests, setGuests] = useState(1);

  const formatDate = (date) =>
    date ? date.toLocaleDateString() : "Check in - Check out";

  return (
    <div className="price-card">
      <div className="price-header">
        <span className="original-price">₹1,49,086</span>
        <span className="current-price">
          ₹1,00,086<span>/Night</span>
        </span>
      </div>
      <hr />
      <div className="discount-section">
        <span className="discount-text">Special discounts available!!</span>
        <button className="unlock-button">Unlock Price</button>
      </div>
      <div className="input-section">
        <div className="input-box1">
          <AiOutlineCalendar className="calender-icon" />
          <input
            type="text"
            className="date-input"
            placeholder={
              selectedRange.from && selectedRange.to
                ? `${formatDate(selectedRange.from)} - ${formatDate(
                    selectedRange.to
                  )}`
                : "Check in - Check out"
            }
            onClick={() => setShowDatePicker(!showDatePicker)}
            readOnly
          />
          {showDatePicker && (
            <div className="date-picker-container">
              <DayPicker
                mode="range"
                selected={selectedRange}
                onSelect={(range) =>
                  setSelectedRange(range || { from: undefined, to: undefined })
                }
                className="day-picker"
              />
            </div>
          )}
        </div>

        <div className="input-box1">
          <AiOutlineUser className="user-icon" />
          <input
            type="text"
            className="guests-input"
            placeholder="Guests"
            value={`${guests} Guests`}
            readOnly
          />
          <div className="guest-counter">
            <button onClick={() => setGuests((prev) => prev + 1)}>
              <FaAngleUp />
            </button>
            <button onClick={() => setGuests((prev) => Math.max(1, prev - 1))}>
              <FaAngleDown />
            </button>
          </div>
        </div>
      </div>
      <button className="availability-button">Check Availability</button>
    </div>
  );
};

export default PriceCard;
