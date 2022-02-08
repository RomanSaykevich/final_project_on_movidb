import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import MoviesList from "./components/MoviesList/MoviesList";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
