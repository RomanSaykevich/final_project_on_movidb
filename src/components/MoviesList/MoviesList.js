import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllMovies} from "../../store/slices";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesListStyle.css';


const MoviesList = () => {
    const {results} = useSelector(store => store.movie.movies);

    const page = useSelector(store => store.movie.page);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies(page));
    }, [page]);

    return (
        <div className='MoviesList'>
            {
                results && results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)
            }
        </div>
    );
};

export default MoviesList;