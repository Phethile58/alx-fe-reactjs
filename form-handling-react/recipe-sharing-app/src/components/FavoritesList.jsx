import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((s) =>
    s.favorites.map((id) => s.recipes.find((r) => r.id === id))
  );

  return (
    <div>
      <h2>❤️ My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((r) => (
          <div key={r.id} style={{ marginBottom: '1rem' }}>
            <h3>{r.title}</h3>
            <p>{r.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
