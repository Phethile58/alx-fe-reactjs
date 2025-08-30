import React from "react";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
       <h1 className="text-3xl font-bold mb-6 text-center">
        GitHub User Search
      </h1>
    <div className="w-full max-w=xl">
    <Search />
      </div>
    </div>
  );
};

export default App;

