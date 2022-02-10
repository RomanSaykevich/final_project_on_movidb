import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import GenresList from "./pages/GenresList/GenresList";
import GenresFilterFilms from "./pages/GenresFilterFilms/GenresFilterFilms";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<MoviesList/>}/>
                    <Route path={':id'} element={<MovieDetails/>}/>
                    <Route path={'/genres'} element={<GenresList/>}>
                        <Route index element={<MoviesList/>}/>
                        <Route path={':id'} element={<GenresFilterFilms/>}>
                            <Route path={':id'} element={<MovieDetails/>}/>

                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;


//https://api.themoviedb.org/3/discover/movie?&language=uk-UK&api_key=a88837c3d1d7f16327b3392526bc3be8&with_genres=16?page=2
