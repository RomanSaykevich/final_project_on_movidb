import React from 'react';
import {NavLink} from "react-router-dom";

import {IMG_IP} from "../../constants";
import './MovieListCardStyle.css';


const MoviesListCard = ({movie}) => {

const {id,poster_path, original_title, vote_average} = movie;


    return (
        <div className='MoviesListCard'>
            <NavLink to={id.toString()} state={movie}>
            <div className='MoviesListCard-img'><img src={IMG_IP + poster_path} alt="poster"/></div>

            <div className='MoviesListCard-info'>

                    <div className='MoviesListCard-title'>{original_title}</div>


                <div>{vote_average}</div>
            </div>
            </NavLink>
        </div>
    );
};

export default MoviesListCard;