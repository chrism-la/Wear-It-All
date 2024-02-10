// folder src - file index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from '../src/App';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
