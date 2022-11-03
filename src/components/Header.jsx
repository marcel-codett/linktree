import React, { useState, useEffect } from "react";
import MyPicture from "../assets/marcel.jpg";
import shareLg from "../assets/shareLg.png";
import shareMd from "../assets/shareMd.png";

const Header = () => {
  const [screenSize, setScreenSize] = useState();
  const [activeMenu, setactiveMenu] = useState(true);
  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setactiveMenu(false);
    } else {
      setactiveMenu(true);
    }
  }, [screenSize]);

  return (
    <header className=" lg:w-800 w-300 md:w-400 grid place-items-center text-center relative">
      <nav className=" ">
        {activeMenu === true ? (
          <img
            className=" absolute  cursor-pointer right-0"
            src={shareLg}
            alt="share"
          />
        ) : (
          <img
            className="absolute cursor-pointer right-0"
            src={shareMd}
            alt="share"
          />
        )}
        <img
          id="profile__img"
          className="rounded-full w-20 h-20"
          src={MyPicture}
          alt="profile"
        />
        <h3
          id="twitter"
          className="dark:text-white text-[#222222] font-bold text-2xl"
        >
          Marcel
        </h3>
        <p id="slack" className="hidden">
          marcel
        </p>
      </nav>
    </header>
  );
};

export default Header;
