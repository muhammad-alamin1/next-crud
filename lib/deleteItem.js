"use client";

const deleteItem = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log("Item deleted:", data.message);
    } else {
      console.error("Failed to delete item:", data.message);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};
