import React, { useEffect } from 'react'
import './app.scss'
import logo from '../assets/webpack.svg'

export default function App() {
    useEffect(() => {
        fetch('/vacation/d')
            .then((res) => res.json())
            .then((data) => console.log(data))
    }, [])

    return (
        <div className="app">
            <div className="app-header">
                <img src={logo} alt="webpack_logo" />
            </div>

            <br />
            <h1>Features:</h1>
            <br />

            <ul>
                <li>Proxy Backendass</li>
                <li>React Fast-Refresh</li>
                <li>Fonts (loads with css)</li>
                <li>Files (assets)</li>
                <li>CSS/SCSS Support</li>
                <li>ES Lint | Prettier | Airbnb</li>
            </ul>
        </div>
    )
}
