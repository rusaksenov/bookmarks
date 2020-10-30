import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Main from './Components/Main/Main';

import YouTube_logo from './img/icons/youtube.svg'
import VK_logo from './img/icons/vk.svg'
import Figma_logo from './img/icons/figma.svg'
import Inst_logo from './img/icons/instagram.svg'
import GDrive_logo from './img/icons/drive.svg'
import Dropbox_logo from './img/icons/dropbox.svg'
import YDrive_logo from './img/icons/ydrive.svg'

import img from './img/icons/interface/image.svg'
import chevronLeft from './img/icons/interface/chevron-left.svg'
import clock from './img/icons/interface/clock.svg'
import home from './img/icons/interface/home.svg'
import search from './img/icons/interface/Search.svg'
import folder_icon from './img/icons/interface/folder.svg'

function App() {

    const desingInterface = {
        icons: {
            img: img,
            chevronLeft: chevronLeft,
            clock: clock,
            home: home,
            search: search,
            folder: folder_icon
        },
        colors: {
            main: "#3F3356",
            mainBlack: "#1A051D",
            mainWhite: "#D0C9D6",
        }
    }

    const sizeBookmarks = [
        {
            fonts: '16px',
            height: "150px",
            width: "240px",
            margin: "4px",

            heightIcon: "100px",
            widthIcon: "100px",
        },
        {
            fonts: '8px',
            width: "100%",
            height: "100%",
            margin: "0",

            heightIcon: "10px",
            widthIcon: "20px",
        }
    ]

    const allBookmarks = [
        {
            title: "YouTube",
            link: "#",
            icon: YouTube_logo,
            textColor: "#F0F0F0",
            BGcolor: "#ee0000",
            url: "https://www.youtube.com"
        },
        {
            title: "Вкотакте",
            link: "#",
            icon: VK_logo,
            textColor: "#F0F0F0",
            BGcolor: "#4980C5",
            url: "https://vk.com"
        },
        {
            title: "Figma",
            link: "#",
            icon: Figma_logo,
            textColor: "#F0F0F0",
            BGcolor: "#333333",
            url: "https://figma.com"
        },
        {
            title: "Instagram",
            link: "#",
            icon: Inst_logo,
            textColor: "#F0F0F0",
            BGcolor: "radial-gradient(circle at -15% 110%, #fdf497 0%, #f9d432 2%, #fd5949 25%,#d6249f 40%,#285AEB 90%)",
            url: "https://instagram.com"
        },
        {
            title: "Google Drive",
            link: "#",
            icon: GDrive_logo,
            textColor: "#333",
            BGcolor: "#F0F0F0",
            url: "https://drive.google.com/drive/"
        },
        {
            title: "Яндекс.Диск",
            link: "#",
            icon: YDrive_logo,
            textColor: "#333",
            BGcolor: "#F0F0F0",
            url: "https://disk.yandex.ru/"
        },
        {
            title: "Dropbox",
            link: "#",
            icon: Dropbox_logo,
            textColor: "#333",
            BGcolor: "#F0F0F0",
            url: "https://www.dropbox.com/home/"
        }
    ]

    const folders = [
        {
            name: 'Главная',
            icon: desingInterface.icons.folder
        },
        {
            name: 'Работа',
            icon: desingInterface.icons.folder
        },
        {
            name: 'Мой блог',
            icon: desingInterface.icons.folder
        },
        {
            name: 'Документы',
            icon: desingInterface.icons.folder
        },
        {
            name: 'Обучение',
            icon: desingInterface.icons.folder
        },
        {
            name: 'Склад',
            icon: desingInterface.icons.folder
        }
    ]

    return (
        <div className="App">
            <div className="app-wrapper">
                <div className="sidebar">
                    <Sidebar
                        desingInterface={desingInterface}
                        folders={folders} />
                </div>
                <div className="main">
                    <Main
                        allBookmarks={allBookmarks}
                        desingInterface={desingInterface}
                        sizes={sizeBookmarks}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
