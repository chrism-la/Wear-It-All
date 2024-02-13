// folder views - file update


import React from 'react'
import Header from '../components/header'
import UpdateForm from '../components/updateForm';
import Footer from "../components/footer"
import { useLocation } from 'react-router-dom';


function Update() {
    const location = useLocation();
    const imageData = location.state?.imageData || {};
    return (
        <div>
            <Header/>
            <UpdateForm imageData={imageData}/>
            <Footer/>
        </div>
    );
}

export default Update;
