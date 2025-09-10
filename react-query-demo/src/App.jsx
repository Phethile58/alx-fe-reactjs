import React from 'react'
import PostsComponent from './components/PostsComponent.jsx'

function App() {
  return (
    <div className="App p-6">
      <h1 className="text-2xl font-bold mb-4">React Query Demo</h1>
      <p className="mb-6 text-gray-600">
        Fetching and caching posts from JSONPlaceholder API using React Query.
      </p>
      
      <PostsComponent />
    </div>
  )
}

export default App 
