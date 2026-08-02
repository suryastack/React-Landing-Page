import React from "react";
import FooterContent from "./FooterContent";

const Footer = (props) => {
  return (
    <div className="bg-white px-2 pb-2">
    <div className="bg-gray-900 rounded-xl">
      <FooterContent footerLinks={props.footerLinks}/>
    </div>
    </div>
  );
};

export default Footer;
