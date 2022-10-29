import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import { items } from "../src/assets/links";
import slack from "../src/assets/slack.png";
import { FaSlack, FaGithub } from "react-icons/fa";
import LinkTree from "./components/LinkTree";
import Footer from "./components/Footer";
function App() {
  const [theme, setTheme] = useState("light");

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";

    setTheme(newTheme);
    console.log(newTheme);
  };
  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div
        className="dark:bg-main-dark-bg
      overflow-x-hidden py-20 grid place-items-center h-max"
      >
        <Header theme={theme} switchTheme={switchTheme} />
        <LinkTree cardItems={items} />
        <div className="flex items-center text-[#667085] space-x-10 my-20">
          <a href="https://hng.slack.com/archives/D048FS4CCKC">
            <FaSlack
              className="w-10 h-10 
              dark:text-white
             object-cover"
              src={slack}
              alt="slack"
            />
          </a>
          <a href="https://github.com/marcel-codett">
            <FaGithub
              className="
            dark:text-white w-10 h-10"
            />
          </a>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
