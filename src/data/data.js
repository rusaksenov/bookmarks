import React from 'react'

const dataArray = {
    iconInterface: {
        iconSearch: '',
        iconClose: '',
        iconSetting: '',
        iconFolder: ''
    },

    bookmarks: {
        content: [
            {
                type: 'bookamark',

                name: 'YouTube',
                bg: '',
                icon: {
                    lightTheme: {
                        default: '100x100',
                        small: '24x24',
                    },
                    darkTheme: {
                        default: '100x100',
                        small: '24x24',
                    }
                },
                direсtory: '/',
                sizes: {
                    default: {
                        height: '',
                        width: '',

                        fontSize: '',
                        margin: '',

                        heightIcon: '',
                        widthIcon: ''
                    },
                    small: {
                        height: '',
                        width: '',
                        
                        fontSize: '',
                        margin: '',

                        heightIcon: '',
                        widthIcon: '',
                    },
                }
            }
        ]
    }
}


const data = () => {
    return (
        <div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}