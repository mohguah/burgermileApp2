import { Route, Routes } from "react-router-dom";


function RoutesMapper() {
    return (
        <Routes>
            {pages.map((p) => (
                <Route key={p.name} path={p.path} element={<p.component />} />
            ))}
        </Routes>
    );
}

export default RoutesMapper