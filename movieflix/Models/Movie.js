import { settings } from '../utilities/config.js';

export default class Movie {
  // Privata fält...
  #id = 0;
  #title = '';
  #overview = '';
  #releaseDate = '';
  #poster = '';

  constructor(id, title, overview, releaseDate, poster) {
    this.#id = id;
    this.#title = title;
    this.#overview = overview;
    this.#releaseDate = releaseDate;
    this.#poster = poster;
  }

  get id() {
    return this.#id;
  }

  get title() {
    return this.#title;
  }

  get overview() {
    return this.#overview;
  }

  get releaseDate() {
    return this.#releaseDate;
  }

  get poster() {
    return `${settings.IMAGE_URL}${this.#poster}`;
  }
}
