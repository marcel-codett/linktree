import React from "react";
import MyPicture from "../assets/marcel.jpg";
import Theme from "./Theme";

const Header = ({ switchTheme, theme }) => {
  return (
    <header>
      <nav className="flex items-center gap-20">
        <div className="flex items-center gap-8">
          <img
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
        </div>
        <div>
          <Theme theme={theme} switchTheme={switchTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
