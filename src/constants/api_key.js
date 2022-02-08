import {keyApi} from "./key";

export const urls = {
    movies: (page) => `/discover/movie?sort_by=popularity.desc&api_key=${keyApi}&page=${page}`
};



