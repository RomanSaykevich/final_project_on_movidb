import {axiosService} from "./axios.service";
import {urls} from "../constants";


export const moviesService = {
    getMovies: () => axiosService.get(urls.movies).then(value => value.data)
}