import React from "react";
import { useParams } from "react-router-dom";

function Posts() {
  const { params } = useParams();

  const posts = {
    article1: {
      title: "Article 1",
      content: "This is article 1",
    },
    article2: {
      title: "Article 2",
      content: "This is article 2",
    },
  };

  const post = posts[params];

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default Posts;
