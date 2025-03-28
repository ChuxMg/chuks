import React from "react";
// import { Facebook, Twitter, Linkedin, Github } from "lucide-react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const SocialMediaIcons = ({ size }) => {
  const socialMediaLinks = [
    { icon: <FaGithub size={size} />, link: "https://github.com/ChuxMg" },
    {
      icon: <FaLinkedin size={size} />,
      link: "https://www.linkedin.com/in/chuks-mgbojikwe"
    },
    { icon: <FaXTwitter size={size} />, link: "https://x.com/chux_ffi" },
    {
      icon: <MdOutlineEmail size={size} />,
      link: "mailto:chuxmgbojikwe@gmail.com"
    },
    { icon: <FaWhatsapp size={size} />, link: "http://wa.me/2348036570964" },
  ];

  return (
    <div className="flex space-x-10 mt-6">
      {socialMediaLinks.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-500 text-2xl transition duration-300"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
