import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data),
    getMovieById: (id) => axiosService.get(urls.onemovW(id)).then(value => value.data),
    getAllG: ()=> axiosService.get(urls.genres).then(value => value.data),
    getAllFG: (id)=> axiosService.get(urls.genresFilter(id)).then(value => value.data)
}







