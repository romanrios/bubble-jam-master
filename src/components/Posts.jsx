import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://your-vercel-app.vercel.app/posts") // Actualiza esta URL
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.author}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
