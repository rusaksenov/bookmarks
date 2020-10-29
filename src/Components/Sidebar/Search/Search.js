import React from 'react';
import classes from './Search.module.css';

const Search = (props) => {
    const icons = props.desingInterface.icons
    const colors = props.desingInterface.colors

    return (
        <div className={classes.search}>
            <img src={icons.search} alt="" />
            <input type="text" placeholder="Поиск"
                style={{
                    background: `${colors.main}`,
                }}/>
        </div>
    )
}

export default Search;