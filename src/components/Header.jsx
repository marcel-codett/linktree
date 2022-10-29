import React from "react";
import MyPicture from "../assets/marcel.jpg";
import Theme from "./Theme";

const Header = ({ switchTheme, theme }) => {
  return (
    <header>
      <nav className="flex items-center gap-20">
        <img className="rounded-full w-20 h-20" src={MyPicture} alt="profile" />
        <div>
          <Theme theme={theme} switchTheme={switchTheme} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
