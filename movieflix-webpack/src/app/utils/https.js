import { state } from './state.js';

export const fetchData = async (endpoint, page = 1, criteria = undefined) => {
  const API_KEY = state.api.key;
  const API_URL = state.api.baseUrl;

  let response;
  if (criteria) {
    response = await fetch(`${API_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv-SE&page=${page}`);
  } else {
    response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=sv-SE&page=${page}`);
  }

  const data = await response.json();
  return data;
};
