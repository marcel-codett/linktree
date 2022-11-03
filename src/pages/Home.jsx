import React from "react";
import Header from "../components/Header";
import { items } from "../assets/links";
import slack from "../assets/slack.png";
import github from "../assets/github.png";
// import { FaSlack, FaGithub } from "react-icons/fa";
import LinkTree from "../components/LinkTree";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="">
        <div
          className="dark:bg-main-dark-bg 
      overflow-x-hidden py-20 grid place-items-center h-max"
        >
          <Header />
          <LinkTree cardItems={items} />
          <div className="flex items-center text-[#667085] space-x-10 my-20">
            <a href="https://hng.slack.com/archives/D048FS4CCKC">
              <img
                className="w-7 h-7 
              dark:text-white
             object-cover"
                src={slack}
                alt="slack"
              />
            </a>
            <a href="https://github.com/marcel-codett">
              <img
                className="
            dark:text-white w-7 h-7 object-cover"
                src={github}
                alt="github"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
