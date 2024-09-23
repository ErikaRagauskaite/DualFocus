import React from "react";
import { FaBook, FaStackOverflow, FaReact } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiCss3, SiFreecodecamp } from "react-icons/si";

const UsefulLinks = () => {
  const links = [
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      icon: <FaBook />,
    },
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/",
      icon: <FaStackOverflow />,
    },
    {
      name: "W3Schools",
      url: "https://www.w3schools.com/",
      icon: <MdSchool />,
    },
    { name: "CSS-Tricks", url: "https://css-tricks.com/", icon: <SiCss3 /> },
    {
      name: "FreeCodeCamp",
      url: "https://www.freecodecamp.org/",
      icon: <SiFreecodecamp />,
    },
    {
      name: "React Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      icon: <FaReact />,
    },
  ];

  return (
    <div>
      <h2>Need Help?</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              margin: "10px",
              fontSize: "24px",
              color: "#007bff",
              display: "flex",
              alignItems: "center",
            }}
          >
            {link.icon}
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};
export default UsefulLinks;
