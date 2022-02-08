import {configureStore} from "@reduxjs/toolkit";

import movieReducer from "./slices/movi.slice";

const store = configureStore({
    reducer: {
        movie: movieReducer
    }
});

export default store;