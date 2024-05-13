// folder views - file home
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/header.tsx';
import Carousel from '../components/carousel.tsx';
import Footer from '../components/footer.tsx';

function Home() {
    return (
        <div>
            <Header />
            <Carousel />
            <Footer />
        </div>
    );
}

export default Home;
