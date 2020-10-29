import React from 'react';
import classes from './Main.module.css';
import Bookmark from './Bookmark/Bookmark';
import SearchMain from './SearchMain/SearchMain';
import Setting from './Setting/Setting';
import Folder from './Folder/Folder';

const Main = (props) => {

    const allBookmarksElement = props.allBookmarks.map(el =>
        <Bookmark
            sizes={props.sizes[0]}
            url={el.url}
            icon={el.icon}
            title={el.title}
            BGcolor={el.BGcolor}
            textColor={el.textColor} />
    )

    return (
        <div className={classes.win}>
            <div className={classes.content}>
                <div className={classes.setting}>
                    <Setting icon={props.desingInterface.icons} />
                </div>
                <div className={classes.main}>
                    <div className={classes.search}>
                        <SearchMain desingInterface={props.desingInterface} />
                    </div>
                    <div className={classes.bookmarks__list}>
                        {allBookmarksElement}
                        <Folder
                            allBookmarks={props.allBookmarks}
                            sizes={props.sizes}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;