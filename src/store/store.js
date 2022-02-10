import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movi.slice";
import oneMovieReducer from "./slices/one.movi.slice";
import genresReducer from "./slices/genres.slice";
import genresFilterReduser from "./slices/genres.filter.slice";


const store = configureStore({
    reducer: {
        movie: movieReducer,
        oneMovie: oneMovieReducer,
        genre: genresReducer,
        genresFilter: genresFilterReduser
    }
});

export default store;