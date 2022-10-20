import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListView from "../pages/ListView";
import Store from '../pages/Store';
import Layout from "./Layout";

function RoutesMapper() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path='list' element={<ListView />} />
                <Route path='map' element={<Store />} />
            </Route>
        </Routes>
    );
}

export default RoutesMapper