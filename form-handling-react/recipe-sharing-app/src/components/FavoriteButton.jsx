import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [
    { id: 1, title: 'Tomato Pasta', description: 'Simple pasta with tomatoes.' },
    { id: 2, title: 'Avocado Toast', description: 'Toast with smashed avocado.' },
    { id: 3, title: 'Chicken Curry', description: 'Spicy chicken curry with rice.' },
  ],

  favorites: [],
  recommendations: [],

  // Favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.includes(recipeId)
        ? state.favorites
        : [...state.favorites, recipeId],
    })),

  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  toggleFavorite: (recipeId) => {
    const { favorites, addFavorite, removeFavorite } = get();
    favorites.includes(recipeId) ? removeFavorite(recipeId) : addFavorite(recipeId);
  },

  // Mock Recommendations: suggest recipes NOT already in favorites
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      (r) => !favorites.includes(r.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
