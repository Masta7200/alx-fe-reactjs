import axios from 'axios';

export const fetchUserData = async (username, location, minRepos) => {
  let query = username ? `user:${username}` : 'user:';
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>${minRepos}`;

  const response = await axios.get(`https://api.github.com/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};
