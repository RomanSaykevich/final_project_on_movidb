import React from 'react';
import {NavLink} from "react-router-dom";

import {IMG_IP} from "../../constants";
import './MovieListCardStyle.css';


const MoviesListCard = ({movie}) => {


    const {poster_path, original_title, vote_average} = movie;

    return (
        <div className='MoviesListCard'>

            <div className='MoviesListCard-img'><img src={IMG_IP + poster_path} alt="poster"/></div>

            <div className='MoviesListCard-info'>
                <NavLink to={'/'}>
                    <div className='MoviesListCard-title'>{original_title}</div>
                </NavLink>

                <div>{vote_average}</div>
            </div>

        </div>
    );
};

export default MoviesListCard;