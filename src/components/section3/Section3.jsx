import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Section3 = () => {
  return (
    <div className="w-full px-15 py-3">
      <div className="w-full flex items-center justify-between px-15 py-5 bg-blue-200 rounded-xl mb-7">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Section3;
