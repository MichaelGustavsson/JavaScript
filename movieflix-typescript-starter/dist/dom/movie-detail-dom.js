var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getMovie } from '../services/movie-detail.js';
function initApp() {
    findMovie();
}
function findMovie() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = location.search.split('=')[1];
        // const result = await getMovie(parseInt(id))
        const result = yield getMovie(+id);
        console.log(result);
        console.log(result.results);
        // const test = result as unknown;
        // const movie = test as Movie;
        const movie = result;
        console.log(movie);
    });
}
document.addEventListener('DOMContentLoaded', initApp);
