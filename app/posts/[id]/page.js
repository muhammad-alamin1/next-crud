"use client";

import getSinglePosts from "@/lib/getSinglePost";
import React, { useEffect, useState } from "react";

const SinglePost = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getSinglePosts(id);
        setPost(postsData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchPosts();
  }, []);

  return (
    <main>
      <div>
        <h1>Title: {post.title}</h1>
        <p>description: {post.body}</p>
      </div>
    </main>
  );
};

export default SinglePost;
