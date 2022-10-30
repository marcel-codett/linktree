import React from "react";
import Card from "./Card";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
const LinkTree = ({ cardItems }) => {
  return (
    <div className="flex flex-col my-10 gap-8">
      {cardItems.map((item) => (
        <TooltipComponent content={item.subtitle}>
          <Card id={item.id} title={item.title} link={item.link} />
        </TooltipComponent>
      ))}
    </div>
  );
};

export default LinkTree;
