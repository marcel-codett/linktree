import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = ({ theme, switchTheme }) => {
  return (
    <div>
      <label htmlFor="" className="relative inline-block w-12 h-6">
        <button
          id="darkMode"
          className={`rounded-xl bg-blue-400 py-4 px-6 hover:shadow-xl`}
          onClick={switchTheme}
        >
          {theme === "dark" ? (
            <FaSun className=" theme-icon text-[#222222]" />
          ) : (
            <FaMoon className="theme-icon text-white" />
          )}
        </button>
      </label>
    </div>
  );
};

export default Theme;
