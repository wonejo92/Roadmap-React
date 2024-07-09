import React from 'react'
import reactDOM from 'react-dom/client'
import { App } from './HelloWorldApp'
import { FirstApp } from './FirstApp.jsx'
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";



reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirstApp title="REACT" subTitle="PropTypes" numbers={92}/>*/}
        <CounterApp value={10}/>
    </React.StrictMode>
)