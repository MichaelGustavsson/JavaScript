import { HttpExceptions } from './Exceptions';

export async function postData(data) {
  const response = await fetch('https://minsajt.com/vehicles', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new HttpExceptions(
      response.status,
      'Det gick inte att spara bilen',
      result
    );
    // throw new Error('Hej och hå!!!');
  }

  return result;
}
