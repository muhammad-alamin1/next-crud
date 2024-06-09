"use client";

import getAllPosts from "@/lib/getPosts";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsData = await getAllPosts();
        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchPosts();
  }, []);

  let countPosts = posts.length;

  return (
    <main>
      <ul>
        <h3>Posts loaded: {countPosts}</h3>
        {posts.map((post, index) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              Si No. {index + 1}. {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default PostsPage;
