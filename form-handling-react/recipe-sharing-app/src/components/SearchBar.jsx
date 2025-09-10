import useRecipeStore from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="🔍 Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        display: 'block',
        width: '100%',
        padding: '0.5rem',
        margin: '1rem 0',
        borderRadius: '6px',
        border: '1px solid #ccc',
      }}
    />
  );
};

export default SearchBar;
