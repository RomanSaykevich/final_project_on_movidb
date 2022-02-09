import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getOneMovieById} from "../../store/slices";
import './MovieDetailsStyle.css'
import {IMG_IP} from "../../constants";



const MovieDetails = () => {

    const {movieO} = useSelector(store => store.oneMovie);
    console.log(movieO);
    const {
        backdrop_path,
        genres,
        original_title,
        overview,
        poster_path,
        production_companies,
        production_countries,
        release_date,
        vote_average,
        vote_count
    } = movieO;


    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneMovieById(id));
    }, []);


    return (
        <div className='movieDetails'>
            <h1>{original_title}</h1>
            <div className='movieDetails-img'><img src={IMG_IP + backdrop_path} alt="poster"/></div>
            <div>{overview}</div>
            <div><strong>Release_date:</strong> {release_date}</div>
            <div><strong>Vote_average:</strong> {vote_average}</div>
            <div><strong>Vote_count:</strong> {vote_count}</div>
        </div>
    );
}

export default MovieDetails;
