import axios from "axios";

export const fetchAdvanceUsers = async (username,location, repos) => {
    let query = "";

     if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${repos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query.trim()
  )}`;

  const response = await axios.get(url);
  return response.data.items; 
  catch (error) {
    console.error("GitHub API Error:", error.response?.data || error.message);

    return { error: "Looks like we can't find the user" };
  }
};
