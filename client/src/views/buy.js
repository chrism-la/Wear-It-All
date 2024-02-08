// folder views - file buy

import React from 'react'
import Header from '../components/header'
import SearchBar from '../components/searchBar';
import Thumbnail from '../components/thumbnail';

function Buy() {
    return (
        <div>
            <Header/>
            <SearchBar/>

            <p>Navigate effortlessly through our intuitive buying page, where a seamless blend of curated selections and user-friendly features awaits, ensuring a hassle-free shopping experience tailored to your unique style preferences. </p>

            <Thumbnail/>
        </div>
        
    );
}

export default Buy;
