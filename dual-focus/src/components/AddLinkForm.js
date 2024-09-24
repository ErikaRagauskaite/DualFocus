import React, { useState } from "react";

const AddLinkForm = ({ onAddLink }) => {
  const [newLink, setNewLink] = useState("");
  const [newLinkName, setNewLinkName] = useState("");

  const addLink = (e) => {
    e.preventDefault();
    if (newLink && newLinkName) {
      onAddLink({ name: newLinkName, url: newLink });
      setNewLink("");
      setNewLinkName("");
    }
  };

  return (
    <form onSubmit={addLink} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Link Name"
        value={newLinkName}
        onChange={(e) => setNewLinkName(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Link URL"
        value={newLink}
        onChange={(e) => setNewLink(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddLinkForm;
