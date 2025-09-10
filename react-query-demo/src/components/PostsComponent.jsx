import React from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchPosts = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  return res.data
}

const PostsComponent = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  })

  if (isLoading) return <p>Loading posts...</p>
  if (isError) return <p>Error fetching posts!</p>

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <button
        onClick={() => refetch()}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Refetch Posts
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id} className="mb-2 border-b pb-1">
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsComponent


