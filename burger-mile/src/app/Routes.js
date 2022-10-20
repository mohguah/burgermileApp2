import { Switch } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ListView from "../pages/ListView";
import Store from '../pages/Store';
import Layout from "./Layout";

function RoutesMapper() {
    return (
        <Routes>

            <Route exact path="/" element={<HomePage />} />
            <Route path='list' element={<ListView />} />
            <Route path='map' element={<Store />} />

        </Routes>
    );
}

export default RoutesMapper