import React from "react";
import Card from "./Card";
const LinkTree = ({ cardItems }) => {
  return (
    <div className="flex flex-col my-10 gap-5">
      {cardItems.map((item) => (
        <Card title={item.title} link={item.link} />
      ))}
    </div>
  );
};

export default LinkTree;
