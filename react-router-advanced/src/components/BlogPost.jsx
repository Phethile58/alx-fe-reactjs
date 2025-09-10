import React from "react";
import { useParams } from "react-router-dom";

export default function BlogPost() {
  const { id } = useParams(); // Get the dynamic :id from the URL

  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is a placeholder for blog post {id} content.</p>
    </div>
  );
}

