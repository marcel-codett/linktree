import React from "react";
import Card from "./Card";
import RouterCard from "./RouterCard";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

const LinkTree = ({ cardItems }) => {
  return (
    <div className="flex flex-col my-10 gap-8">
      {cardItems.map((item) => (
        <TooltipComponent
          key={item.key}
          content={item.subtitle}
          position="BottomCenter"
        >
          {item.page_route ? (
            //  {/* uses  the react-router Link to moved through pages in the app */}

            <RouterCard id={item.id} title={item.title} link={item.link} />
          ) : (
            //  {/* uses  the html <a> tag Link to moved to an external resource */}
            <Card id={item.id} title={item.title} link={item.link} />
          )}
        </TooltipComponent>
      ))}
    </div>
  );
};

export default LinkTree;
