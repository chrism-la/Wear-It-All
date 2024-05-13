// folder views - file update

import React from 'react';
import Header from '../components/header.tsx';
import UpdateForm from '../components/updateForm.tsx';
import Footer from '../components/footer.tsx';
import { useLocation } from 'react-router-dom';

function Update() {
    const location = useLocation();
    const imageData = location.state?.imageData || {};
    return (
        <div>
            <Header />
            <UpdateForm imageData={imageData} />
            <Footer />
        </div>
    );
}

export default Update;
