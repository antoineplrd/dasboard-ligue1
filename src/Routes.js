import React from "react";
import { Routes, Route } from 'react-router-dom';
import PageAPI from "./Components/PageAPI";
import Home from "./Home";

export default () => (
    <Routes>
        <Route path="/pageAPI" element={<PageAPI />} />
        <Route path="/" element={<Home />} />
    </Routes>
)