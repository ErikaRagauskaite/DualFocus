import React, { useState } from "react";
import { FaBook, FaStackOverflow, FaReact, FaPlus } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiCss3, SiFreecodecamp } from "react-icons/si";
import Link from "./Link";
import AddLinkForm from "./AddLinkForm";

const UsefulLinks = () => {
  const [links, setLinks] = useState([
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
  ]);

  const addLink = (newLink) => {
    setLinks([...links, newLink]);
  };

  const deleteLink = (index) => {
    if (window.confirm("Are you sure you want to delete this link?")) {
      setLinks(links.filter((_, i) => i !== index));
    }
  };

  return (
    <div>
      <h2>Need Help?</h2>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        {links.map((link, index) => (
          <Link key={index} link={link} onDelete={() => deleteLink(index)} />
        ))}
        <button
          onClick={() => {
            const linkContainer = document.getElementById("add-link-container");
            if (linkContainer) {
              linkContainer.style.display = "block";
            }
          }}
          style={{
            margin: "10px",
            fontSize: "24px",
            color: "#007bff",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaPlus />
        </button>
      </div>

      <div id="add-link-container" style={{ display: "none" }}>
        <AddLinkForm onAddLink={addLink} />
      </div>
    </div>
  );
};

export default UsefulLinks;
