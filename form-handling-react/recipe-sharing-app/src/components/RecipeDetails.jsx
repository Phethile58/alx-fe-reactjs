import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { id } = useParams();
  const numericId = Number(id);
  const recipe = useRecipeStore((s) =>
    s.recipes.find((r) => String(r.id) === String(numericId || id))
  );

  if (!recipe) {
    return (
      <div>
        <p>Recipe not found.</p>
        <Link to="/">← Back to list</Link>
      </div>
    );
  }

  return (
    <div>
      <Link to="/">← Back to list</Link>
      <h2 style={{ marginTop: '0.5rem' }}>{recipe.title}</h2>
      <p>{recipe.description}</p>

      <div style={{ marginTop: '0.75rem' }}>
        <DeleteRecipeButton id={recipe.id} />
      </div>

      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
