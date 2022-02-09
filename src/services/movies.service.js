import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data),
    getMovieById: (id) => axiosService.get(urls.onemovW(id)).then(value => value.data)
}







