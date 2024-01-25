var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { state } from './config.js';
export function fetchData(endpoint, page = 1, criteria) {
    return __awaiter(this, void 0, void 0, function* () {
        const API_KEY = state.api.key;
        const API_URL = state.api.baseUrl;
        let url = '';
        if (criteria) {
            url = `${API_URL}${endpoint}?query=${criteria}&api_key=${API_KEY}&language=sv-SE&page=${page}`;
        }
        else {
            url = `${API_URL}${endpoint}?api_key=${API_KEY}&language=sv-SE&page=${page}`;
        }
        try {
            const response = yield fetch(url);
            if (response.ok) {
                const data = yield response.json();
                return data;
            }
            else {
                throw new Error(`${response.status} ${response.statusText}`);
            }
        }
        catch (error) {
            throw error;
        }
    });
}
