import { settings } from '../utilities/config.js';

export default class Movie {
  // Privata fält...
  #id = 0;
  #title = '';
  #overview = '';
  #releaseDate = '';
  #poster = '';
  #backgroundImage = '';
  #vote = 5;
  #genres = [];

  constructor(
    id,
    title,
    overview,
    releaseDate,
    poster,
    backgroundImage,
    vote,
    genres
  ) {
    this.#id = id;
    this.#title = title;
    this.#overview = overview;
    this.#releaseDate = releaseDate;
    this.#poster = poster;
    this.#backgroundImage = backgroundImage;
    this.#vote = vote;
    this.#genres = genres;
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

  get backgroundImage() {
    return `${settings.BACKDROP_IMAGE_URL}${this.#backgroundImage}`;
  }

  get vote() {
    return this.#vote.toFixed(1) + ' / 10';
  }

  get genres() {
    return this.#genres;
  }
}
