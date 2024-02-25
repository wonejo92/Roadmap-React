import React from 'react'
import reactDOM from 'react-dom/client'
import { App } from './HelloWorldApp'


reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)