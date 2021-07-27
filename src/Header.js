import React from 'react';
import PersonIcon from "@material-ui/icons/Person"
import IconButton  from '@material-ui/core/IconButton';
import Forum from '@material-ui/icons/Forum';
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon"/>
            </IconButton>

            <img 
            className="header__logo"
            src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
            alt=""
            />

            <IconButton>
                <Forum fontSize="large" className="header__icon"/>
            </IconButton>

        </div>
    )
}

export default Header
