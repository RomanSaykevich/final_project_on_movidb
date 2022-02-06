import {Routes, Route} from "react-router-dom";

import './App.css';
import Layout from "./components/Layout/Layout";


function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
