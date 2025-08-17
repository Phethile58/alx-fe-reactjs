import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from'./components/UserProfile';
import { useState } from 'react';
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';
import UserInfo from './UserInfor';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Import your component here
import WelcomeMessage from './components/WelcomeMessage';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

function App() {
   const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header /> 
      <MainContent />
      <Footer />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      {/* show your WelcomeMessage componet */}
      <WelcomeMessage />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
