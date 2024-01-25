import { Movie } from '../models/MovieModel.js';
import { ResponseModel } from '../models/ResponseModel.js';
import { fetchData } from '../utilities/http.js';

export async function getMovie(id: number): Promise<ResponseModel> {
  // const result = await fetchData('movie/' + id);
  const result = await fetchData(`movie/${id}`);
  return result;
  // return await fetchData('movie/' + id)
}
