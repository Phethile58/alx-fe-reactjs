import {useState} from "react";
import { fetchAdvanceUsers } from "../services/githubService";

const  Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repos, setRepos] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser([]);

    try {
      const data = await fetchAdvanceUsers(username, location, repos);
      setUser(data.items || []);
    } catch (err) {
     setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
   <div className="max-w-xl mx-auto p-4">
    <form 
    onSubmit={handleSearch}
     className="grid gap-3 sm:grid-cols-3 bg-white p-4 rounded-lg shadow-md">
      
      <input
        type="text"
        placeholder="Enter username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
           className=" border rounded-lg px-3 py-2 w-full"
      />
       <input
          type="text"
          placeholder="Location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        />
        <input
          type="number"
          placeholder="Min Repos..."
          value={repos}
          onChange={(e) => setRepos(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg w-full hover:bg-blue-700"
        >
          Search
        </button>
      </form>
      <div className="mt-6">
      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {user.length > 0 && (
        <ul className="space-y-4">
            {users.map((user) => (
              <li
                key={user.id}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow"
              >
          <img
            src={user.avatar_url}
            alt={users.login}
            className="w-16 h-16 rounded-full"
          />
          <div>
          <h2 className="font-semibold text-lg">{user.login}</h2>
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 underline"
          >
            View Profile
          </a>
        </div>
        </li>
      ))}
     </ul>
      )}
    </div>
    </div>
  );
};

export default Search;

      
  

