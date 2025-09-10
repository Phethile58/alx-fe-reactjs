import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/'); // go back to list
  };

  return (
    <button onClick={handleDelete} style={{ marginLeft: '0.5rem' }}>
      Delete
    </button>
  );
};

export default DeleteRecipeButton;
