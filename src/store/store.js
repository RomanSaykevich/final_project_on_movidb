import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movi.slice";
import oneMovieReducer from "./slices/one.movi.slice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        oneMovie: oneMovieReducer
    }
});

export default store;