import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';

export async function getSerie(id: number): Promise<ResponseModel> {
  const result = await fetchData('tv/' + id);
  return result;
}
