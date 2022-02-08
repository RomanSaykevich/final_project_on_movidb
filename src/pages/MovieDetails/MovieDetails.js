import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getOneMovieById} from "../../store/slices";
import store from "../../store/store";




const MovieDetails = () => {

    const result = useSelector(store=>store.oneMovie.movieO);
    console.log(result);

const {popularity, original_title} = result;

    const {id} = useParams();


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOneMovieById(id));
    }, [id]);


    return (
        <div>
            gdhgsahdgashugdhsu
            { popularity} {original_title}
        </div>
    );
}

export default MovieDetails;