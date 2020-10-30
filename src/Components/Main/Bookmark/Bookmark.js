import React from 'react';
import classes from './Bookmark.module.css';

const Bookmark = (props) => {

    return (
        <a href={props.url} className={classes.bookmarks__item}
            style={{
                background: `${props.BGcolor}`,
                color: `${props.textColor}`,
                fontSize: `${props.sizes.fonts}`,
                width: `${props.sizes.width}`,
                height: `${props.sizes.height}`,
                margin: `${props.sizes.margin}`,
            }}
        >
            <div className={classes.bookmarks__norm}>
                <div className={classes.bookmarks__logo}
                    style={{
                        width: `${props.sizes.heightIcon}`,
                        height: `${props.sizes.heightIcon}`
                    }}
                >
                    <img src={props.icon} alt=""/>
                </div>
                <strong className={classes.bookmarks__title}>{props.title}</strong>
            </div>
            {/* <div className={classes.bookmarks__hover}></div> */}
        </a>
    )
}

export default Bookmark;