import {axiosService} from "./axios.service";
import {keyApi, urls} from "../constants";
import {MovieUrl} from "../constants";


export const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data),
    getMovieById: (id) => axiosService.get(`${MovieUrl}/${id}?api_key=${keyApi}`).then(value => value.data)
}


//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>a88837c3d1d7f16327b3392526bc3be8