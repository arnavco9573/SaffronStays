"use client";
import React from "react";
import "./Footer.css";
import MobilePriceCard from "../MobilePriceCard/MobilePriceCard";

const Footer = ({ footerData }) => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-sections">
          {/* Logo */}
          <div className="footer-section">
            <div className="footer-logo-mobile">
              <img src="./footer-logo.png" alt="" />
            </div>
          </div>

          {footerData.map((section, index) => (
            <div key={index} className="footer-section">
              <h4 className="footer-title">{section.title}</h4>
              <ul className="footer-list">
                {section.items.map((item, idx) => (
                  <li key={idx} className="footer-item">
                    {item.link ? (
                      <a href={item.link} className="footer-link">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2021 SaffronStays. All rights reserved
        </p>
        <div className="footer-icons">
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
          <div className="icon"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
