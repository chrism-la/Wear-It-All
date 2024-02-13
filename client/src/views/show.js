// folder views - file show
import React from 'react';
import Header from '../components/header';
import ShowCard from '../components/showCard';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer';

function Show() {
    const location = useLocation();

    const imageData = location.state?.imageData || {};

    return (
        <div>
            <Header />
            <ShowCard imageData={imageData} />
            <Footer />
        </div>
    );
}

export default Show;
