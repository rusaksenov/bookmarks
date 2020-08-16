import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

function App() {

    const allBookmarks = [
        {
            title: "YouTube",
            icon: "../../../img/icons/youtube.svg",
            color: "youtube"
        },
        {
            title: "YouTube",
            icon: "../../../img/icons/youtube.svg",
            color: "youtube"
        },
        {
            title: "YouTube",
            icon: "../../../img/icons/youtube.svg",
            color: "youtube"
        },
        {
            title: "YouTube",
            icon: "../../../img/icons/youtube.svg",
            color: "youtube"
        }
    ]

    return (
        <div className="App">
            <div className="app-wrapper">
                <Sidebar />
                <Main allBookmarks={allBookmarks} />
            </div>
        </div>
    );
}

export default App;
