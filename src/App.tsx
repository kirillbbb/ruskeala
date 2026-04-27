import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";

import Home from "./pages/Home";
import MapPage from "./pages/MapPage";
import PointPage from "./pages/PointPage";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/map" element={<MapPage />} />
                    <Route path="/point/:id" element={<PointPage />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;