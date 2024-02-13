// folder views - file home
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/header";
import Carousel from "../components/carousel";
import Footer from "../components/footer"


function Home() {
    return (
        <div>
            <Header/>
            <Carousel/>
            <Footer/>
        </div>
        
    );
}

export default Home;
