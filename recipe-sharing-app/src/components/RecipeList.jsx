import { Link } from 'react-router-dom';
import  useRecipeStore  from '../store/recipeStore';
import SearchBar from './SearchBar';
 
const RecipeList = () => {
  const recipes = useRecipeStore((state) =>
    state.searchTerm ? state.filteredRecipe :state.recipes
);
const searchTerm = useRecipestore((state) => state.searchTerm);

  return (
    <div>
      <h2>Recipe List</h2>
      <SearchBar />

      {recipes.length === 0 ? (
        <p>
          {searchTerm
          ? `No recipes found for "${searchTerm}"`
            : 'No recipes yet.'}
          </p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {recipes.map((r) => (
            <li key={r.id} style={{ marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
              <h3 style={{ marginBottom: '.25rem' }}>{r.title}</h3>
              <p style={{ marginBottom: '.5rem' }}>{r.description}</p>
              <Link to={`/recipes/${r.id}`}>View details →</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default RecipeList;
   