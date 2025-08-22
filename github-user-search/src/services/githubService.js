import axios from "axios";

export const fetchAdvanceUsers = async (username,location, minrepos) => {
    
    let query = "";

     if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (repos) query += `repos:>=${minrepos}`;

  try {
  const response = await axios.get(
  `https://api.github.com/search/users?q=${query}`
);

  return response.data; 
} catch (error) {
  throw new Error;
}
};
