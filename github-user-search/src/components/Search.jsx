import React from "react";
import { fetchAdvancedUsers } from "../services/githubService";

export default function Search() {0
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = await fetchAdvanceUser(username, location, minRepos);
      setUser(data.items || []);
    } catch (err) {
     setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="max-w-xl mx-auto p-6">
    <form
        onSubmit={handleSearch}
        className="bg-white shadow-lg rounded-xl p-6 space-y-4"
      >
      <h1 className="text-2xl font-bold text-gray-800">GitHub User Search</h1>

    {/* Username input */}
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
           className="w-full p-2 border rounded-lg"
      />
      
       {/* Location input */}
        <input
          type="text"
          placeholder="Location (e.g. London)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        {/* Min repositories */}
        <input
          type="number"
          placeholder="Min repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Results */}
      <div className="mt-6">
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <ul className="space-y-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center space-x-4 p-4 border rounded-lg shadow-sm"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 font-semibold"
                >
                  {user.login}
                </a>
                <p className="text-gray-600">
                  Score: {user.score.toFixed(2)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>    
  );
};


