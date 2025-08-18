import { useState } from 'react'   
import { useState } from 'react'   
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1> Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
      
  )
}

export default App;


