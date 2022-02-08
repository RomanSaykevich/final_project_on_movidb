import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
