import {useState} from "react";
import { fetchUsersData } from "../services/githubService";

const  Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
     if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
     setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="max-w-xl mx-auto p-4">
    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Enter GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
           className="flex-1 border rounded-lg px-3 py-2"
      />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user && (
        <div className="border rounded-lg p-4 text-center">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-24 h-24 rounded-full mx-auto mb-2"
          />
          <h2 className="text-lg font-semibold">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;

      
  

