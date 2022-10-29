import React from "react";
import zuriLogo from "../assets/zuri.png";
import i4G from "../assets/I4G.png";

const Footer = () => {
  return (
    <div
      className="w-200  lg:w-800 flex-col
     md:flex-row flex items-start lg:items-center
     gap-7 lg:gap-0 border-t-2 border-bg-main-dark
     w-[80%] lg:pt-8 pt-4 justify-between"
    >
      <img src={zuriLogo} alt="zuri-logo" />
      <p className="text-gray-500">HNG Internship 9 Frontend Task</p>
      <img src={i4G} alt="ingressive-logo" />
    </div>
  );
};

export default Footer;
