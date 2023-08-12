import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './assets/style.scss'
// flag-iocn
import "/node_modules/flag-icons/css/flag-icons.min.css";
// Language
import "../src/i18n/i18"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App/>


 
);
