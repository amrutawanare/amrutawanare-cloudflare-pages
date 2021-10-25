import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://worker.amrutawanare.workers.dev/posts"
      );
      const postsResp = await resp.json();
      console.log(postsResp)
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {Object.keys(posts).map((id, post) => (
        <div key={id}>
          <h2>
            <Link to={`/posts/${id}`}>{posts[id].title}</Link>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default Posts;