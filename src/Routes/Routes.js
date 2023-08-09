import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home/Home'
import SinglePage from '../Pages/SinglePage/SinglePage';

const Routing = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route exact index element={<Home />} />
                    <Route path='/singlepage/:id' element={<SinglePage />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing