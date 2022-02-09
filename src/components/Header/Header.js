import React, {useCallback} from 'react';
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";

import './HeaderStyle.css'
import {getAllMovies} from "../../store/slices";


const Header = () => {

    const dispatch = useDispatch();

    const submit = useCallback(() => {
        dispatch((getAllMovies(1)))
    }, [dispatch]);

    return (
        <div className='header'>
            <h1>All World Films</h1>

            <ul>
                <NavLink to={'/'} onClick={submit}>
                    <li>Home</li>
                </NavLink>

                <NavLink to={'/'}>
                    <li>All Films</li>
                </NavLink>

                <NavLink to={'/genres'}>
                    <li>Genres</li>
                </NavLink>
            </ul>
            
            <div className='search'>
                <input className='search-inp' type="search" placeholder='search...'/>
            </div>
        </div>
    );

};

export default Header;