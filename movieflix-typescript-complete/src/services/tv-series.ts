import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';

export async function listAllSeries(page: number = 1): Promise<ResponseModel> {
  const result = await fetchData('tv/popular', page);
  return result as ResponseModel;
}

export async function searchMovies(
  criteria: string,
  page: number = 1
): Promise<ResponseModel> {
  const result = await fetchData('search/tv', page, criteria);
  return result as ResponseModel;
}
