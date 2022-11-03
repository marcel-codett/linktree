import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  return (
    <Link
      id={props.id}
      key={props.id}
      to={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className="bg-[#EAECF0]
    lg:w-1000 w-300 md:w-400 rounded-md text-center 
 dark:bg-main-bg py-6 "
      >
        <h2 className="font-normal text-xl ">{props.title}</h2>
      </div>
    </Link>
  );
};

export default Card;
