import React from 'react'
import reactDOM from 'react-dom/client'
import { App } from './HelloWorldApp'
import { FirtsApp } from './FirtsApp'
import './styles.css';
import {CounterApp} from "./CounterApp.jsx";



reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/*<FirtsApp title="Kevin Cordero" subTitle="PropTypes" numbers={92}/>*/}
        <CounterApp value={0}/>
    </React.StrictMode>
)