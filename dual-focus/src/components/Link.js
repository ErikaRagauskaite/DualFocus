import React from "react";
import { FaTrash } from "react-icons/fa";

const Link = ({ link, onDelete }) => {
  return (
    <div style={{ margin: "10px", display: "flex", alignItems: "center" }}>
      <a href={link.url} target="_blank" rel="noopener noreferrer">
        {link.name}
      </a>
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Link;
