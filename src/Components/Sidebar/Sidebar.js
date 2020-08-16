import React from 'react';
import classes from './Sidebar.module.css';
import Search from './Search/Search';

const Sidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <Search />
            </div>
        </div>
    )
}

export default Sidebar;