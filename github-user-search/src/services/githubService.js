import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: import.meta.env.VITE_GITHUB_TOKEN
    ? { Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}` }
    : {},
});

export const fetchUserData = async (username) => {  
  try {
  const response = await api.get(`/users/${username}`);
  return response.data; 
} catch (error) {
  throw  error;
 }
};

export const fetchAdvanceUsers = async (username, location, minRepos) => {
  let query = "";

  if (username) query += `${username}+`;
  if (location) query += `location:${location}+`;
  if (minRepos) query += `repos:>=${minRepos}`;

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${query}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};