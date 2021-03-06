import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header_socials">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <FaGithub />
      </a>
      <a href="https://facebook.com" target="_blank">
        <SiFacebook />
      </a>
    </div>
  );
};

export default HeaderSocials;
