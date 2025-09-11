import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <TodoList />
    </div>
  );
}

  
