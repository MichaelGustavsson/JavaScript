import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';
import { listAll } from './listData.js';

export async function listAllSeries(page: number = 1): Promise<ResponseModel> {
  const result = await listAll('tv/popular', page);
  return result;
}

export async function searchSeries(
  criteria: string,
  page: number = 1
): Promise<ResponseModel> {
  const result = await fetchData('search/tv', page, criteria);
  return result;
}
