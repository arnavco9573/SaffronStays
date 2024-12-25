import React from "react";
import "./navbar.css";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="main1">
      <div className="left-pannel">
        {/* logo and search bar */}
        <div>
          <Image
            src="/logo.png"
            alt="Logo"
            width={183.51}
            height={42.65}
            className="logo"
          />
        </div>
        <div className="search-box">
          <CiSearch />
          <input
            type="text"
            placeholder="search for location, villa, facilities..."
            className="input-box"
          />
        </div>
      </div>

      <div className="right-pannel">
        {/* info for and button */}
        <div className="right-pannel-item">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={26}
            height={23.68}
            className="logo1"
          />
          <p>SaffronStays</p>
          {/* mobile specific logo */}
          <div className="mobile-icon">
            <FaSearch />
          </div>
        </div>
        <div className="right-pannel-item">
          <HiOutlinePhone />
          <p>08069160000</p>
        </div>
        <div className="right-pannel-item">
          <button>
            <p>Login</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
