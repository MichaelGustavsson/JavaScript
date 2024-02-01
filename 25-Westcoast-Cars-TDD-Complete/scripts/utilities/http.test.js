import { expect, it, test, vi } from 'vitest';
import { postData } from './http.js';
import { HttpExceptions } from './Exceptions.js';

const testData = { success: true, statusCode: 201, data: 'Det gick bra' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    // Steg 2 för att förklara reject.
    // Vi vill kontrollera att data är kört igenom JSON.stringify innan anropet skickas...
    if (typeof options.body !== 'string') {
      return reject('Not correct json');
    }

    const response = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testData);
        });
      },
    };
    resolve(response);
  });
});

vi.stubGlobal('fetch', testFetch);

it('ska returnera tillgänglig resultat ifrån anropet', () => {
  const data = { manufacturer: 'Volvo' };

  return expect(postData(data)).resolves.toEqual(testData);
});

it('ska omvandla javascript objekt till json objekt innan anropet görs', async () => {
  const data = { manufacturer: 'Volvo' };

  let errorMessage;

  try {
    await postData(data);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('Not correct json');
});

it('ska returnera/kasta ett HttpException objekt om det inte går bra', () => {
  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
      const response = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testData);
          });
        },
      };
      resolve(response);
    });
  });

  const data = { manufacturer: 'Volvo' };

  return expect(postData(data)).rejects.toBeInstanceOf(HttpExceptions);
});
