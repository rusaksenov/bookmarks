import React from 'react';
import classes from './SearchMain.module.css';

const SearchMain = (props) => {
    const colors = props.desingInterface.colors

    return (
        <div className={classes.content}>
            <select className={classes.search_type} id="title" name="title"
                style={{
                    backgroundColor: `${colors.main}`,
                    color: `${colors.mainWhite}`,
                }}>
                <option value="Bookmarks" selected>
                    Bookmarks
                </option>
                <option value="Google">
                    Google
                </option>
                <option value="Yandex">
                    Yandex
                </option>
                <option value="DuckDuckGo">
                    DuckDuckGo
                </option>
            </select>
            <input className={classes.search_input} type="text" placeholder="Поиск" style={{
                backgroundColor: `${colors.main}`,
                color: `${colors.mainWhite}`,
            }} />
        </div>
    )
}

export default SearchMain;