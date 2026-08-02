import React from "react";
import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const Section3 = () => {
  return (
    <div className="w-full px-4 py-3 sm:px-6 md:px-10 xl:px-15">
      <div className="w-full flex flex-col items-start gap-4 px-5 py-5 bg-blue-200 rounded-xl mb-7 sm:px-6 sm:gap-5 md:flex-row md:items-center md:justify-between md:px-10 xl:px-15">
        <LeftPart />
        <RightPart />
      </div>
    </div>
  );
};

export default Section3;
