import React, {useCallback} from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './LayoutStyle.css'

import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store/slices";


const Layout = () => {

    const page = useSelector(store => store.movie.page);

    const dispatch = useDispatch();

    const submitPrev = useCallback(() => {
        dispatch((getAllMovies(page - 1)))
    }, [page]);


    const submit = useCallback(() => {
        dispatch((getAllMovies(page + 1)))
    }, [page]);

    return (
        <div>
            <Header/>
            <div className='Layout-Outlet'><Outlet/></div>

            <div className='layout-btns'>
                <button onClick={submitPrev}>Previous Page</button>
                <button onClick={submit}>Next Page</button>
            </div>

            <Footer/>
        </div>
    );
};

export default Layout;