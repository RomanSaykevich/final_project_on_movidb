import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getMovies: (page) => axiosService.get(urls.movies(page)).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movies}/${id}`).then(value => value.data)
}