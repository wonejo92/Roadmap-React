import React from 'react'
import reactDOM from 'react-dom/client'

function App(){
    return (<h1>Hello World!!</h1>);
}

reactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)