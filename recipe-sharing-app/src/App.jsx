import {Router, Route, Link } from 'react-router-dom'; 
import { useState } from 'react'; 
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationList';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FavoritesList from './components/FavoritesList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <header style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}></header>
        <h1> Recipe Sharing App</h1>
        <Link to="/">Home</Link>
        <Link to="/add">Add Recipe</Link>
         <Link to="/favorites">Favorites</Link>
        <Link to="/recommendations">Recommendations</Link>

    <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/add" element={<AddRecipeForm />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>  
    </div>
      
  );
}

export default App;


