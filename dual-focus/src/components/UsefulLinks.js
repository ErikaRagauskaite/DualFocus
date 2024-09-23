import React, { useState } from "react";
import { FaBook, FaStackOverflow, FaReact, FaPlus } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { SiCss3, SiFreecodecamp } from "react-icons/si";

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

  const [newLink, setNewLink] = useState({ name: "", url: "" });
  const [isAdding, setIsAdding] = useState(false);

  const handleInputChange = (e) => {
    setNewLink({ ...newLink, [e.target.name]: e.target.value });
  };

  const handleAddLink = () => {
    if (newLink.name && newLink.url) {
      setLinks([...links, { ...newLink, icon: <FaBook /> }]);
      setNewLink({ name: "", url: "" });
      setIsAdding(false);
    }
  };

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
        <button onClick={() => setIsAdding(true)} style={{ fontSize: "24px" }}>
          <FaPlus />
        </button>
      </div>
      {isAdding && (
        <div>
          <input
            type="text"
            name="name"
            value={newLink.name}
            onChange={handleInputChange}
            placeholder="Link Name"
          />
          <input
            type="text"
            name="url"
            value={newLink.url}
            onChange={handleInputChange}
            placeholder="Link URL"
          />
          <button onClick={handleAddLink}>Add Link</button>
          <button onClick={() => setIsAdding(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};
export default UsefulLinks;
