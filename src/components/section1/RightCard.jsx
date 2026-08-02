import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className="h-full shrink-0 snap-center overflow-hidden relative w-[78%] rounded-3xl sm:w-[62%] md:w-[45%] lg:w-1/3 xl:rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.img}
        alt=""
      />
      <RightCardContent id={props.id} review={props.review} tag={props.tag}/>
    </div>
  );
};

export default RightCard;
