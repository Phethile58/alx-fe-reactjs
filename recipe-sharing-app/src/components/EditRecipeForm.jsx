import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');

  // keep form in sync if recipe changes
  useEffect(() => {
    setTitle(recipe?.title || '');
    setDescription(recipe?.description || '');
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
    navigate(`/recipes/${recipe.id}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 520, marginTop: '1rem' }}>
      <h3>Edit Recipe</h3>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '.5rem' }}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows={5}
        style={{ display: 'block', width: '100%', marginBottom: '1rem', padding: '.5rem' }}
      />
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditRecipeForm;
