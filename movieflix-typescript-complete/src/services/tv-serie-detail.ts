import { TV } from '../models/TVModel.js';
import { fetchData } from '../utilities/http.js';

export async function getSerie(id: number): Promise<TV> {
  const serie = await fetchData('tv/' + id);
  return serie as TV;
}
