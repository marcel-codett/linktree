import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const PageLayout = () => {
  return (
    <div
      className="dark:bg-main-dark-bg 
    overflow-x-hidden py-20 grid place-items-center h-max"
    >
      <Outlet />
      <Footer />
    </div>
  );
};

export default PageLayout;
