import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddRecipeForm from "./AddRecipeForm";
import data from "../data.json";

function HomePage() {
  const [recipes, setRecipes] = useState([]);

 useEffect(() => {
    setRecipes(data); // load mock data
  }, []);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <div className="p-6">
      <AddRecipeForm onAddRecipe={handleAddRecipe} />

      <h1 className="text-3xl font-bold mb-6 text-center">🍴 Recipe Sharing Platform</h1>
      
      <div className="p-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 overflow-hidden"
          >
            <img src={recipe.image || "https://via.placeholder.com/300x200" } 
            alt={recipe.title}
             className="w-full h-40 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600 text-sm">{recipe.summary}</p>
              <Link
                to={`/recipe/${recipe.id}`}
                className="inline-block mt-3 text-blue-500 hover:text-blue-700 font-medium"
              >
                View Recipe →
                </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
