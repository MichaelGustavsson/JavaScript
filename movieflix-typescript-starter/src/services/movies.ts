import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';
import { listAll } from './listData.js';

// Hämta alla filmer ifrån http.js
export async function listAllMovies(page: number = 1): Promise<ResponseModel> {
  const result = await listAll('movie/popular', page);
  return result;
}

// Gör en fritext sökning efter filmer
export async function searchMovies(
  criteria: string,
  page: number = 1
): Promise<ResponseModel> {
  const result = await fetchData('search/movie', page, criteria);
  return result;
}
