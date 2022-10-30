import React from "react";

const Card = (props) => {
  return (
    <a
      id={props.id}
      href={props.link}
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
    </a>
  );
};

export default Card;
