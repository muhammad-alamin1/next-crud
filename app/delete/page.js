"use client";

import { useState } from "react";

function DeleteItemComponent() {
  const [itemId, setItemId] = useState("");
  const [success, setSuccess] = useState("");

  const handleDelete = async () => {
    await deleteItem(itemId);
    setSuccess("Delete Successfully.");
    // Optionally, update the UI after deletion
  };

  return (
    <div>
      {success && <div>{success}</div>}
      <input
        type="text"
        placeholder="Enter item ID"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
      />
      <button onClick={handleDelete}>Delete Item</button>
    </div>
  );
}

export default DeleteItemComponent;
