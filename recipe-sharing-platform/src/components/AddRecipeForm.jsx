import { useState } from "react";

function AddRecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [steps, setSteps] = useState([""]);
  const [errors, setErrors] = useState({}); // ✅ use an object to track multiple field errors

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  const addIngredient = () => setIngredients([...ingredients, ""]);
  const addStep = () => setSteps([...steps, ""]);

  // ✅ Validation function
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (ingredients.some((i) => !i.trim())) newErrors.ingredients = "All ingredient fields must be filled";
    if (steps.some((s) => !s.trim())) newErrors.steps = "All step fields must be filled";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      summary: steps.join(" ").substring(0, 60) + "...",
      image: "https://via.placeholder.com/300x200",
      ingredients: ingredients.map((i) => i.trim()),
      instructions: steps.map((s) => s.trim()),
    };

    onAddRecipe(newRecipe);

    // Reset form
    setTitle("");
    setImage("");
    setIngredients([""]);
    setSteps([""]);
    setErrors({});
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Ingredients</label>
          {ingredients.map((ing, idx) => (
            <input
              key={idx}
              value={ing}
              onChange={(e) => handleIngredientChange(idx, e.target.value)}
              placeholder={`Ingredient ${idx + 1}`}
              className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500"
            />
          ))}
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          <button type="button" onClick={addIngredient} className="text-blue-500 hover:underline text-sm">
            + Add another ingredient
          </button>
        </div>

        <div>
          <label className="block mb-1 font-medium">Preparation Steps</label>
          {steps.map((step, idx) => (
            <textarea
              key={idx}
              value={step}
              onChange={(e) => handleStepChange(idx, e.target.value)}
              placeholder={`Step ${idx + 1}`}
              className="w-full border border-gray-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500"
              rows={2}
            ></textarea>
          ))}
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
          <button type="button" onClick={addStep} className="text-blue-500 hover:underline text-sm">
            + Add another step
          </button>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

         
