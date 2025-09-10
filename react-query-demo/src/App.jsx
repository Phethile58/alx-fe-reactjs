import React from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from './components/PostsComponent.jsx'
import "./App.css";

const queryClient = new QueryClient();

export default function App() {
  return (
    // Wrap the app in QueryClientProvider
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen p-4 bg-gray-100">
        <PostsComponent />
      </div>
    </QueryClientProvider>  
  )
   }