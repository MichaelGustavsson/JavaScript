import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';

export async function listAll(
  endpoint: string,
  page: number = 1
): Promise<ResponseModel> {
  const result = await fetchData(endpoint, page);
  return result;
}
