const getAllPosts = async () => {
  try {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts`);

    if (!result.ok) {
      throw new Error("Something Error! Data fetching error.!");
    }

    return result.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error; // Optionally re-throw the error if you want the caller to handle it
  }
};

export default getAllPosts;
