import React from 'react';
import classes from './Main.module.css';
import Bookmark from './Bookmark/Bookmark';
import SearchMain from './SearchMain/SearchMain';
import Setting from './Setting/Setting';

const Main = (props) => {

    const allBookmarksElement = props.allBookmarks.map(el =>
        <Bookmark icon={el.icon} title={el.title} id={el.color} />
    )

    return (
        <div className={classes.content}>
            <div className={classes.s}></div>
            <Setting />
            <SearchMain />
            <div className={classes.bookmarks__list}>
                {allBookmarksElement}
            </div>
        </div>
    )
}

export default Main;