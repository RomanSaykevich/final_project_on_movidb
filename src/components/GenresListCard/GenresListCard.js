import React from 'react';
import {NavLink} from "react-router-dom";

import './GenresListCardStyle.css';

const GenresListCard = ({genr:{id, name}}) => {

    return (
        <div className='GenresListCard'>
            <NavLink to={'/'}><h2 className='GenresListCard-a'>{name}</h2></NavLink>
        </div>
    );
};

export default GenresListCard;