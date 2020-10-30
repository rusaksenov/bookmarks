import React from 'react';
import classes from './Sidebar.module.css';
import Search from './Search/Search';

const Sidebar = (props) => {
    const colors = props.desingInterface.colors

    const folderElements = props.folders.map(el =>
        <div className={classes.folders__item}>
            <div className={classes.folders__icon}>
                <img src={el.icon} alt="" />
            </div>
            <div className={classes.folders__text}>
                <span>{el.name}</span>
            </div>
        </div>
    )

    return (
        <div className={classes.sidebar}
            style={{
                background: `${colors.mainBlack}`,
                color: `${colors.mainWhite}`
            }}>
            <div className={classes.header}>
                <Search desingInterface={props.desingInterface} />
            </div>
            <div className={classes.folders}
                style={{
                    borderTop: `1px solid ${colors.main}`
                }}>
                {folderElements}
                <div className={`${classes.folders__item} ${classes.creat_folder}`}>
                    <div className={classes.folders__icon}>
                        <img src={props.folders[0].icon} alt="" />
                    </div>
                    <div className={classes.folders__text}>
                        <span>Создать папку</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;