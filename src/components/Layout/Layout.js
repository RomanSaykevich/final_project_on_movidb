import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import './LayoutStyle.css'



const Layout = () => {


    return (
        <div>
            <Header/>

            <div className='Layout-Outlet'><Outlet/></div>

            <Footer/>
        </div>
    );
};

export default Layout;