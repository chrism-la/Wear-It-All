// folder src file App.js
import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './views/home.tsx';
import Buy from './views/buy.tsx';
import Gift from './views/gift.tsx';
import Sell from './views/sell.tsx';
import Show from './views/show.tsx';
import Update from './views/update.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/show" element={<Show />} />
                <Route path="/update" element={<Update />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
