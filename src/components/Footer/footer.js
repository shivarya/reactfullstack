import React from "react";
import style from './footer.css';
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../config";

const Footer = () => (
    <footer className={style.footer}>
        <Link to="/" className={style.logo}>
            <img alt="nba logo" src="/images/nba_logo.png" />
        </Link>
        <div className={style.right}>
            @NBA { CURRENT_YEAR } All right reserved.
        </div>
    </footer>
)

export default Footer;