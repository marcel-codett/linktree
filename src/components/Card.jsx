import React from "react";

const Card = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer">
      <div
        className="bg-[#EAECF0]
    lg:w-800 w-300 md:w-400 rounded-md text-center
 dark:bg-main-bg py-4"
      >
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>
      </div>
    </a>
  );
};

export default Card;
