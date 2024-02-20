// folder src file App.js
import "./App.css";
import React from "react";
import { Route, Routes, BrowserRouter,} from "react-router-dom";
import Home from "../src/views/home";
import Buy from "../src/views/buy";
import Gift from "../src/views/gift";
import Sell from "../src/views/sell";
import Show from "../src/views/show";
import Update from "../src/views/update";
import About from "./views/about";
import Contact from "./views/contact";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element ={<Home/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/buy" element={<Buy />} />
                <Route path="/gift" element={<Gift />} />
                <Route path="/sell" element={<Sell />} />
                <Route path="/show" element={<Show />} />
                <Route path="/update" element={<Update />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
