import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "./index.css";

function App() {
  return (
   <div className="min-h-screen flex items-center justify-center bg-gray-900 dark:bg-gray-50">
      <div className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-xl text-gray-800 dark:text-gray-100 max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">
          🚀 Tailwind is Working!
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          This is a fully Tailwind-optimized React + Vite setup with your custom styles.
        </p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Click Me
        </button>
      </div>
    </div>
  );
}

export default App;

