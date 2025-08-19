import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [], // Array of all recipes
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Array of recommended recipes
  searchTerm: '', // Search term for filtering
  filteredRecipes: [], // Array of filtered recipes

  // Action to set the entire list of recipes
  setRecipes: (newRecipes) =>
    set(() => ({
      recipes: newRecipes,
      filteredRecipes: newRecipes, // Update filtered recipes to match the new list
    })),

  // Action to update a recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) => {
              const lowerCaseTerm = state.searchTerm.toLowerCase();
              const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
              const matchesIngredients =
                Array.isArray(recipe.ingredients) &&
                recipe.ingredients.some((ingredient) =>
                  ingredient.toLowerCase().includes(lowerCaseTerm)
                );
              return matchesTitle || matchesIngredients;
            })
          : updatedRecipes,
      };
    }),

  // Action to delete a recipe
  deleteRecipe: (recipeId) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
      return {
        recipes: updatedRecipes,
        filteredRecipes: state.searchTerm
          ? updatedRecipes.filter((recipe) => {
              const lowerCaseTerm = state.searchTerm.toLowerCase();
              const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
              const matchesIngredients =
                Array.isArray(recipe.ingredients) &&
                recipe.ingredients.some((ingredient) =>
                  ingredient.toLowerCase().includes(lowerCaseTerm)
                );
              return matchesTitle || matchesIngredients;
            })
          : updatedRecipes,
      };
    }),

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate recommendations
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          !state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Action to set the search term and filter recipes
  setSearchTerm: (term) =>
    set((state) => {
      const lowerCaseTerm = term.toLowerCase();
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((recipe) => {
          const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
          const matchesIngredients =
            Array.isArray(recipe.ingredients) &&
            recipe.ingredients.some((ingredient) =>
              ingredient.toLowerCase().includes(lowerCaseTerm)
            );
          return matchesTitle || matchesIngredients;
        }),
      };
    }),

  // Action to add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const updatedFilteredRecipes = state.searchTerm
        ? updatedRecipes.filter((recipe) => {
            const lowerCaseTerm = state.searchTerm.toLowerCase();
            const matchesTitle = recipe.title.toLowerCase().includes(lowerCaseTerm);
            const matchesIngredients =
              Array.isArray(recipe.ingredients) &&
              recipe.ingredients.some((ingredient) =>
                ingredient.toLowerCase().includes(lowerCaseTerm)
              );
            return matchesTitle || matchesIngredients;
          })
        : updatedRecipes;

      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedFilteredRecipes,
      };
    }),
}));

export default useRecipeStore;

