import React from "react";
import C1Logo from "./C1Logo";
import C1Text from "./C1Text";
import C1Icons from "./C1Icons";

const Column1 = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <C1Logo />
      <C1Text />
      <C1Icons />
    </div>
  );
};

export default Column1;
