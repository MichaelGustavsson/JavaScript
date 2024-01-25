import { state } from './config.js';
import { ResponseModel } from '../models/ResponseModel.js';

export async function fetchData(
  endpoint: string,
  page: number = 1,
  criteria?: string
): Promise<ResponseModel> {
  const API_KEY = state.api.key;
  const API_URL = state.api.baseUrl;

  let url: string = '';

  if (criteria) {
    url = `${API_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv-SE&page=${page}`;
  } else {
    url = `${API_URL}${endpoint}?api_key=${API_KEY}&language=sv-SE&page=${page}`;
  }

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  } catch (error) {
    throw error;
  }
}
