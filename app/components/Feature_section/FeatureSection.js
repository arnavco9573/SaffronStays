"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import "./FeatureSection.css";
import { MdShare } from "react-icons/md";
import { LuHeart } from "react-icons/lu";
import FeatureBox from "../FeatureBox";
import { IoHomeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { BiBed } from "react-icons/bi";
import { IoPawOutline } from "react-icons/io5";
import { LuSquareParking } from "react-icons/lu";
import { TbAirConditioning } from "react-icons/tb";
import { GoDotFill } from "react-icons/go";
import CustomerReviewCard from "../CustomerReviewCard";
import RoomSpecificationCard from "../RoomSpecificationCard";
import PriceCard from "../PriceCard/PriceCard";

const FeatureSection = () => {
  const features = [
    { icon: IoHomeOutline, label: "Entire Villa" },
    { icon: FiUsers, label: "6-12 Guests" },
    { icon: BiBed, label: "8 Bedrooms" },
    { icon: IoPawOutline, label: "Pet-Friendly" },
  ];

  const rules = [
    { id: 1, label: "House Rules" },
    { id: 2, label: "Cancellation Policy" },
    { id: 3, label: "Things you need to know" },
    { id: 4, label: "Things to do" },
  ];

  const amenties_list1 = [
    { id: 1, icon: BiBed, label: "4 Bedrooms" },
    { id: 2, icon: LuSquareParking, label: "Free Parking" },
    { id: 3, icon: BiBed, label: "4 Bedrooms" },
  ];

  const amenties_list2 = [
    { id: 1, icon: FiUsers, label: "12 Guests" },
    { id: 2, icon: TbAirConditioning, label: "Air Conditioner" },
    { id: 3, icon: FiUsers, label: "12 Guests" },
  ];

  const customerreviews = [
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
    { photo: "/customer-reviews1.jpg", name: "Vinay", date: "Sep 03,2024" },
  ];

  const roomSpecification = [
    {photo:"/room-specification.png",description1:"Tucked away cosily in the lap of nature, this is the perfect destination getaway.",description2:"The tourist-favourite Bhimtal Lake is only a stone’s throw away."},
    {photo:"/room-specification.png",description1:"Tucked away cosily in the lap of nature, this is the perfect destination getaway.",description2:"The tourist-favourite Bhimtal Lake is only a stone’s throw away."},
    {photo:"/room-specification.png",description1:"Tucked away cosily in the lap of nature, this is the perfect destination getaway.",description2:"The tourist-favourite Bhimtal Lake is only a stone’s throw away."},
    {photo:"/room-specification.png",description1:"Tucked away cosily in the lap of nature, this is the perfect destination getaway.",description2:"The tourist-favourite Bhimtal Lake is only a stone’s throw away."},
    {photo:"/room-specification.png",description1:"Tucked away cosily in the lap of nature, this is the perfect destination getaway.",description2:"The tourist-favourite Bhimtal Lake is only a stone’s throw away."},
    
    
  ]

  return (
    <>
      <div className="main3">
        <div className="reviews-share">
          <div className="reviews">
            <FaStar />
            <p>
              <span>4.5/</span>5
            </p>
            <p>|</p>
            <p>105 reviews</p>
          </div>
          <div className="share-bookmark">
            <div className="placeholder1">
              <MdShare />
            </div>
            <div className="placeholder1">
              <LuHeart />
            </div>
          </div>
        </div>

        {/* About section starts here  */}
        <div className="about">
          <div className="features-container">
            {features.map((feature, index) => (
              <FeatureBox
                key={index}
                icon={feature.icon}
                label={feature.label}
              />
            ))}
          </div>
          <div>
            <PriceCard/>
          </div>
          <h3 className="heading">About</h3>
          <p>
            Tucked away cosily in the lap of nature, this is the perfect
            destination getaway for a vacation trip near Delhi and Chandigarh.
          </p>
          <p>
            The tourist-favourite Bhimtal Lake is only a stone’s throw away.{" "}
            <span>Read more</span>
          </p>
        </div>
        <div className="imp-things">
          {rules.map((rules) => (
            <div className="rules" key={rules.id}>
              <p key={rules.id}>{rules.label}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Amenties Section starts here */}
      <div className="amenties-box">
        <h3 className="heading">Amenties</h3>
        <div className="amenties">
          <div className="amenties1">
            {amenties_list1.map((amenties) => (
              <div key={amenties.id} className="amenties_list">
                <amenties.icon className="amenties-icon" />
                <p>{amenties.label}</p>
              </div>
            ))}
          </div>
          <div className="amenties2">
            {amenties_list2.map((amenties) => (
              <div key={amenties.id} className="amenties_list">
                <amenties.icon className="amenties-icon" />
                <p>{amenties.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rules rules-of-amenties ">
          <a href="">View all Amenities</a>
        </div>
      </div>
      {/* meals div */}
      <div className="meals-box">
        <h3 className="heading">Meals</h3>
        <p>
          A cook is available to prepare local specialities and a delicious
          spread of{" "}
          <span>home-cooked meals all day, at an additional charge</span>{" "}
        </p>
        <div className="food-choices">
          <div className="foods">
            <div className="veg">
              <GoDotFill />
            </div>
            <div>Veg</div>
          </div>
          <div className="foods">
            <div className="non-veg">
              <GoDotFill />
            </div>
            <div>Non Veg</div>
          </div>
        </div>
        <div className="menu">
          <div className="rules">
            <a>View menu</a>
          </div>
          <div className="rules">
            <a>Meal Rate Card</a>
          </div>
        </div>
      </div>

      {/* Real Moments*/}
      <div className="customer-review-container">
        <h3 className="heading1">Real Moments</h3>
        <div className="customer-reviews">
          {customerreviews.map((review, index) => (
            <CustomerReviewCard
              key={index}
              photo={review.photo}
              name={review.name}
              date={review.date}
            />
          ))}
        </div>
      </div>

      {/* location */}
      <div className="location-container">
        <h3 className="heading"> Location </h3>
        <div className="map" style={{ borderRadius: "10px" }}>
          <iframe
            width="797"
            height="232"
            style={{ border: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d235.87700866163365!2d71.01555483579939!3d18.929971539563372!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ0JzU4LjMiTiA3MsKwNTInNDIuNyJF!5e0!3m2!1sen!2sin!4v1735029903214!5m2!1sen!2sin"
          />
        </div>
        <div>
          <div className="rules">
            <a>Get Direction</a>
          </div>
        </div>
      </div>

      {/* Room specification */}
      <div className="room-specification-container">
          <h3 className="heading">Rooms & Beds</h3>
          <div className="room-specification">
            {
              roomSpecification.map((specification,index)=>(
                <RoomSpecificationCard
                key={index}
                photo={specification.photo}
                description1={specification.description1}
                description2={specification.description2}/>
              ))
            }
          </div>
      </div>
    </>
  );
};

export default FeatureSection;
