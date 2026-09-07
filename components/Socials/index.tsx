import React from "react";
import Button from "../Button";

import myData from "../../data/portfolio.json";

interface SocialsProps {
  className?: string;
}

const Socials = ({ className = "" }: SocialsProps) => {
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {myData.socials.map((social, index) => (
        <Button
          key={index}
          type="button"
          classes=""
          onClick={() => window.open(social.link, "_blank")}
        >
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
