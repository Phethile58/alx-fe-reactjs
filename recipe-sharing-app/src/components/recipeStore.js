import create from 'zustand'

const useRecipeStore = create((set, get) => ({
  recipes: [
     { id: 1, title: 'Tomato Pasta', description: 'Simple pasta with tomatoes.' },
    { id: 2, title: 'Avocado Toast', description: 'Toast with smashed avocado.' },
    { id: 3, title: 'Chicken Curry', description: 'Spicy chicken curry with rice.' },
  ],

  searchTerm: '',
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); 
  },

  filteredRecipes: [],

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const lowerTerm = searchTerm.toLowerCase();

    const filtered = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(lowerTerm) ||
      recipe.description.toLowerCase().includes(lowerTerm)
    );

    set({ filteredRecipes: filtered });
  },

  addRecipe: (newRecipe) => set((state) => ({
     recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe] 
  })),
  
  updateRecipe: (id, updates) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
         r.id === id ? { ...r, ...updates } : r
    );
    return { recipes: updated, filteredRecipes: updated };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const remaining = state.recipes.filter((r) => r.id !== id);
      return { recipe: remaining, filteredRecipes: remaining };
    }),

  
}));

export default useRecipeStore;