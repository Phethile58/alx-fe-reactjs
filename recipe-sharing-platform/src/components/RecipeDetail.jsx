import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id));
        setRecipe(found);
      })
      .catch((err) => console.error("Error loading recipe:", err));
  }, [id]);

  if (!recipe) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        ← Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-lg mb-6" />

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Summary</h2>
        <p>{recipe.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul className="list-disc list-inside">
          {recipe.ingredients ? (
            recipe.ingredients.map((ing, index) => <li key={index}>{ing}</li>)
          ) : (
            <li>No ingredients listed</li>
          )}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
        <ol className="list-decimal list-inside space-y-1">
          {recipe.instructions ? (
            recipe.instructions.map((step, index) => <li key={index}>{step}</li>)
          ) : (
            <li>No instructions listed</li>
          )}
        </ol>
      </section>
    </div>
  );
}

export default RecipeDetail;
