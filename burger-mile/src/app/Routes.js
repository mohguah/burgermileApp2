import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "./Layout";
// import { pages } from '../pages/pages';

function RoutesMapper() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
            </Route>
        </Routes>
    );
}

export default RoutesMapper