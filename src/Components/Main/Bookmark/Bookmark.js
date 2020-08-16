import React from 'react';
import classes from './Bookmark.module.css';

const Bookmark = (props) => {

    return (
        <div className={`${classes.bookmarks__item}`} >
            <div className={classes.bookmarks__norm}>
                <img src={props.icon} alt="" />
                {/* <img src="../../../img/icons/youtube.svg" alt="" /> */}
                <strong className={classes.bookmarks__title}>{props.title}</strong>
            </div>
            {/* <div className={classes.bookmarks__hover}></div> */}
        </div>
    )
}

export default Bookmark;