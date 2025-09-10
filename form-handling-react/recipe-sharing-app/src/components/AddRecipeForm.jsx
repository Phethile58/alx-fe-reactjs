import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from "./recipeStore";

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore((state) => state.addRecipe);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title.trim() || !description.trim()) return;
    const id = Date.now();
    addRecipe({ id, title, description });
    setTitle('');
    navigate(`/recipes/${id}`);
  };

  return (
    <form onSubmit={handleSubmit}style={{ maxWidth: 520 }}>
      <h2>Add New Recipe</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
         style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '.5rem' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
        rows={5}
         style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '.5rem' }}
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;