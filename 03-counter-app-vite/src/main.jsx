import React from 'react'
import reactDOM from 'react-dom/client'
import { App } from './HelloWorldApp'
import { FirtsApp } from './FirtsApp'
import './styles.css';



reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirtsApp/>
    </React.StrictMode>
)