import React from 'react';
import {Link} from 'react-router-dom';
import style from './header.css'

import FontAwesome from 'react-fontawesome';
import SideNavigation from './SideNav/sidenav';

const Header = (props) => {

    const navBars = () => (
        <div className={style.bars}>
            <FontAwesome
                onClick = {props.onOpenNav}
                name="bars"
                style ={{
                    color:'#dfdfdf',
                    padding:'10px',
                    cursor:'pointer'
                }}
            />
        </div>
    )

    const logo = () => (
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
    )
    
    return (
        <header className={style.header}>
            <SideNavigation {...props} />
            <div className={style.headerOpt}>
                {navBars()}
                {logo()}
            </div>
        </header>    
    )
}

export default Header;