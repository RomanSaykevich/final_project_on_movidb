import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movi.slice";

let store = configureStore({
    reducer: {
        movie: movieReducer
    }
});

export default store;