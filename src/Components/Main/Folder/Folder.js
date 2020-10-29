import React from 'react';
import classes from './Folder.module.css';
import Bookmark from '../Bookmark/Bookmark';

const Folder = (props) => {

    const allBookmarksElement = props.allBookmarks.map(el =>
        <div className={classes.folder__bookmarks}>
            <Bookmark
                icon={el.icon}
                title={el.title}
                BGcolor={el.BGcolor}
                textColor={el.textColor}

                sizes={props.sizes[1]}
            />
        </div>
    )

    return (
        <div className={`${classes.folder__item}`}
            style={{
                background: `${props.BGcolor}`,
                color: `${props.textColor}`
            }}
        >
            <div className={classes.bookmarks__list}>
                {allBookmarksElement}
            </div>
            <div className={classes.bookmarks__title}>
                <strong>Folder</strong>
            </div>
        </div>
    )
}

export default Folder;