/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/scss/main.scss":
/*!***********************************!*\
  !*** ./src/assets/scss/main.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/app/utils/https.js":
/*!********************************!*\
  !*** ./src/app/utils/https.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchData: () => (/* binding */ fetchData)
/* harmony export */ });
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./src/app/utils/state.js");


const fetchData = async (endpoint, page = 1, criteria = undefined) => {
  const API_KEY = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.api.key;
  const API_URL = _state_js__WEBPACK_IMPORTED_MODULE_0__.state.api.baseUrl;

  let response;
  if (criteria) {
    response = await fetch(`${API_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv-SE&page=${page}`);
  } else {
    response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=sv-SE&page=${page}`);
  }

  const data = await response.json();
  return data;
};


/***/ }),

/***/ "./src/app/utils/state.js":
/*!********************************!*\
  !*** ./src/app/utils/state.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
const state = {
  api: {
    key: 'cfd8ad8f2d19b724a21ca2510b450da9',
    baseUrl: 'https://api.themoviedb.org/3/',
  },
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_https_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/https.js */ "./src/app/utils/https.js");
/* harmony import */ var _assets_scss_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/scss/main.scss */ "./src/assets/scss/main.scss");



const pageNumber = document.querySelector('#pageNo');
const pages = document.querySelector('#pages');
let criteria = '';

document.querySelector('#gotoFirst').addEventListener('click', onGotoFirstPageHandler);
document.querySelector('#gotoPrevious').addEventListener('click', onGotoPrevHandler);
document.querySelector('#gotoNext').addEventListener('click', onGotoNextPageHandler);
document.querySelector('#gotoLast').addEventListener('click', onGotoLastPageHandler);
document.querySelector('#searchForm').addEventListener('submit', onSearch);

let result;

const listPopularMovies = async (page = 1) => {
  if (criteria && criteria.length > 0) {
    result = await (0,_utils_https_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)('search/movie', page, criteria);
  } else {
    result = await (0,_utils_https_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)('movie/popular', page);
  }

  displayMovies(result.results);
  displayPagination(result);
};

const displayPagination = (data) => {
  const pages = data.total_pages > 500 ? 500 : data.total_pages;
  const currentPage = document.querySelector('#pageNo');
  const numOfPages = document.querySelector('#pages');
  currentPage.innerHTML = data.page;
  numOfPages.innerHTML = pages;
};

function onGotoFirstPageHandler() {
  listPopularMovies(1);
}

function onGotoPrevHandler() {
  let page = +pageNumber.innerHTML;
  page > 1 ? page-- : 1;
  listPopularMovies(page);
}

function onGotoNextPageHandler() {
  const numOfPages = +pages.innerHTML;
  let page = +pageNumber.innerHTML;
  page < numOfPages ? page++ : 500;
  listPopularMovies(page);
}

function onGotoLastPageHandler() {
  listPopularMovies(+pages.innerHTML);
}

function displayMovies(movies) {
  document.querySelector('#top-movies').innerHTML = '';
  movies.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');

    div.innerHTML = `
      <a href="/movie-details.html?id=${movie.id}">
        ${movie.poster_path ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}"/>` : `<img src="./src/assets/images/No-Image.jpg" alt="${movie.title}" />`}
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Premiär datum: ${movie.release_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#top-movies').appendChild(div);
  });
}

async function onSearch(e) {
  e.preventDefault();

  let page = 1;
  criteria = document.querySelector('#searchInput').value;

  if (criteria === '') {
    listPopularMovies();
    return;
  }

  const result = await (0,_utils_https_js__WEBPACK_IMPORTED_MODULE_0__.fetchData)('search/movie', page, criteria);

  displayPagination(result);
  displayMovies(result.results);
}

listPopularMovies();

})();

/******/ })()
;
//# sourceMappingURL=index-80dc7cae7c1f72bdb395.js.map