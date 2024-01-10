export default class HttpClient {
  // ett privat fält...
  #url = '';

  constructor(url) {
    this.#url = url;
  }

  // Generell metod för att hämta data...
  async get() {
    // Hämta data ifrån vår endpoint(this.#url)...
    // Hämtningen kommer att ske asynkront...
    try {
      // Försöka kontakta vårt api(endpoint)
      const response = await fetch(this.#url);

      if (response.ok) {
        // Läser in datat i body egenskapen ifrån response objektet...
        // Observera att json metoden är asynkron...
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      // Skicka tillbaka felet till den som anropar metoden...
      throw new Error(`Ett fel inträffade i get metoden: ${error}`);
    }
  }

  async add(data) {
    try {
      console.log(data);
      const response = await fetch(this.#url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i add metoden: ${error}`);
    }
  }

  async delete() {
    try {
      const response = await fetch(this.#url, {
        method: 'DELETE',
      });
    } catch (error) {
      throw new Error(`Ett fel inträffade i delete metoden: ${error}`);
    }
  }

  async update(data) {
    try {
      const response = await fetch(this.#url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        return result;
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    } catch (error) {
      throw new Error(`Ett fel inträffade i update metoden: ${error}`);
    }
  }
}
